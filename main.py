from lxml import *
from lxml import etree
import io
import time
import requests

# headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}


def scrapeSite(htmlDoc):
    try:
        # Parses the Bytes and returns a ElementTree object
        htmlTree = etree.parse(io.BytesIO(htmlDoc), etree.HTMLParser(encoding="utf-8"))

        # Note: Xpath is a language for navigating through a XML file structure

        # Querys HTML tree for <a> tags containing keywords
        result = htmlTree.xpath(
            "//a[contains(@href,'scholarship') or contains(@href,'bursar')]"
        )

        # Direct link is found
        if result:
            # finds first URL that is accessible
            for element in result:
                url = element.attrib["href"]
                if doesWebsiteExist(url):
                    return url
        # No accessible URLs were found
        return None
    except:
        assert "Error while parsing HTML"
        return None


def findALink(url):
    headers = {"User-Agent": "Web Scraper 3000"}

    try:
        # HTML DOCUMENT in Bytes
        start = time.perf_counter()
        r = requests.get(url, headers=headers)
        htmlDoc = r.content
        end = time.perf_counter()
        print(f"{end - start} {url}")

        # Parses the Bytes and returns a ElementTree object
        htmlTree = etree.parse(io.BytesIO(htmlDoc), etree.HTMLParser())

        # Note: Xpath is a language for navigating through a XML file structure

        # Querys HTML tree for <a> tags containing keywords
        result = htmlTree.xpath(
            "//a[contains(@href,'scholarship') or contains(@href,'bursar')]"
        )

        # Direct link is found
        if result:
            # finds first URL that is accessible
            for element in result:
                url = element.attrib["href"]
                if doesWebsiteExist(url):
                    return url
        # No accessible URLs were found
        return None

    # URL entered couldn't be found
    except Exception:
        print("Something went wrong with scraping the Site!")
        return None


# PERFORMANCE TESTING
def doesWebsiteExist(url):
    try:
        request = requests.head(url, headers={"User-Agent": "Web Scraper 3000"})
    except Exception:
        return False
    return True


# t0 = time.perf_counter()
# findALink("https://www.miltonchamber.ca")
# t1 = time.perf_counter()

# print(t1 - t0)

# t0 = time.perf_counter()
# findALink2("https://www.miltonchamber.ca")
# t1 = time.perf_counter()
# print(t1 - t0)
