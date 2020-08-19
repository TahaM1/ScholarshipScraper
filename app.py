from flask import Flask, render_template, url_for, request, redirect
from main import scrapeSite, findALink
import requests
import requests.exceptions
import time
import asyncio
from asyncRequests import fetch, writeFile

# FLASK Setup
app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True


@app.route("/api/scrape", methods=["POST"])
def api():

    links = list(request.form.values())
    LinkList = []
    print(links)

    # extract html docs
    async def collectHTML():
        HTMLlist = await asyncio.gather(*[fetch(url) for url in links])

        for n, html in enumerate(HTMLlist):
            if html != None:
                link = scrapeSite(html)
                if link != None:
                    LinkList.append(link)

    asyncio.run(collectHTML())

    if not LinkList:
        return render_template(
            "apology.html", text="None of those sites have scholarships",
        )

    return render_template("found.html", list=LinkList)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/check", methods=["GET", "POST"])
def check():

    # Links to Scrape
    dictOfLinks = request.form

    list = []
    for value in dictOfLinks.values():
        # pageLink = checkPerformance(findALink, value)
        pageLink = findALink(value)
        if pageLink:
            list.append(pageLink)

    if not list:
        return render_template(
            "apology.html", text="None of those sites have scholarships",
        )

    return render_template("found.html", list=list)


def checkPerformance(function, value):
    start = time.perf_counter()
    url = function(value)
    end = time.perf_counter()
    print(end - start)
    return url


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

