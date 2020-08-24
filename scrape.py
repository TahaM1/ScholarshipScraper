import requests
from lxml import etree
import io

baseURLS = [
    "https://www.yellowpages.ca/search/si/1/-/-",
    "https://www.yellowpages.com/search?search_terms=-&geo_location_terms=Houston%2C+TX",
]

header = {"User-Agent": "Webscraper 3000"}


def formatURL(baseURL, keywords, location):
    keywords = keywords.strip().replace(" ", "+")
    location = location.strip().replace(" ", "+")
    print(f"{keywords} {location}")
    baseURL = baseURL.replace("-", keywords, 1).replace("-", location, 1)
    return baseURL


def constructHTMLTree(htmlDoc):
    return etree.parse(io.BytesIO(htmlDoc), etree.HTMLParser(encoding="utf-8"))


def requestHTML(url):
    headers = {"User-Agent": "Webscraper 3000"}
    return requests.get(url, headers=headers).content


url = formatURL(baseURLS[0], "dental clinic", "Orange Corners Omemee ON")

htmlDoc = requestHTML(url)

htmlTree = constructHTMLTree(htmlDoc)

results = htmlTree.xpath("//span[text() = 'Website']/../@href")

for result in results:
    result = "https://www.yellowpages.ca" + result
    print(result)

print(len(results))
