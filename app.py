from flask import Flask, render_template, url_for, request, redirect
from main import findALink
import requests
import requests.exceptions
import time

# FLASK Setup
app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/check", methods=["GET", "POST"])
def check():

    # Links to Scrape
    dictOfLinks = request.form

    list = []
    for value in dictOfLinks.values():
        pageLink = findALink(value)
        if pageLink:
            list.append(pageLink)

    if not list:
        return render_template(
            "apology.html", text="None of those sites have scholarships",
        )

    return render_template("found.html", list=list)


# Not using currently
def doesWebsiteExist(url):
    print("running")
    try:
        request = requests.head(url, headers={"User-Agent": "Web Scraper 3000"})
        request.raise_for_status()
    except requests.exceptions.HTTPError:
        return False
    return True


if __name__ == "__main__":
    app.run(debug=True)

