import requests
from lxml import etree
import io
from urllib.parse import unquote
import time

# urls with the parameters/paths removed and replaced with '-'
baseDirectoryURLS = [
    "https://www.yellowpages.ca/search/si/1/-/-",
    "https://www.yellowpages.com/search?search_terms=-&geo_location_terms=-",
]

# Index of these correspond with the urls of the baseDirectory
# Each directory will be parsed differently
XpathForDirectorys = ["//span[text() = 'Website']/../@href"]

header = {"User-Agent": "Webscraper 3000"}

# embeds params/paths into url based on baseURL given
def embedIntoURL(baseURLIndex, keywords, location):
    baseURL = baseDirectoryURLS[baseURLIndex]

    if baseURLIndex == 0:
        keywords = keywords.strip().replace(" ", "+")
        location = location.strip().replace(" ", "+")
        print(f"{keywords} {location}")
        baseURL = baseURL.replace("-", keywords, 1).replace("-", location, 1)
    elif baseURLIndex == 1:
        pass
    return baseURL


# strips excess from urls found based on the baseURL(directory)
def formatLinks(baseURLIndex, links):
    if baseURLIndex == 0:
        for i in range(len(links)):
            links[i] = unquote(links[i], encoding="utf-8").split("redirect=", 2)[1]
        return links
    elif baseURLIndex == 1:
        pass


# Parse html file in bytes into Lxml Tree
def constructHTMLTree(htmlDoc):
    return etree.parse(io.BytesIO(htmlDoc), etree.HTMLParser(encoding="utf-8"))


# retrieves btyes of html
def requestHTML(url):
    headers = {"User-Agent": "Webscraper 3000"}

    return requests.get(url, headers=headers).content


# prints how fast a function finishes
def performance(func):
    def wrapper(*args, **kw):
        t = time.perf_counter()
        output = func(*args, **kw)
        t2 = time.perf_counter() - t
        print("--------------------------------------------------------")
        print(f"{func} took {t2}s")
        print("--------------------------------------------------------")
        return output

    return wrapper


# Finds websites from directory based off search and location params
@performance
def findWebsitesInDirectory(baseURLIndex, search, location):
    assert baseURLIndex < len(baseDirectoryURLS)

    print(f"base url is {baseDirectoryURLS[baseURLIndex]}")

    # Format the params/paths and embeds into baseURL
    url = embedIntoURL(baseURLIndex, search, location)

    # Request html from embeddedURL
    htmlDoc = requestHTML(url)

    # Contruct tree from html
    htmlTree = constructHTMLTree(htmlDoc)

    # parse for website links
    results = htmlTree.xpath(XpathForDirectorys[baseURLIndex])

    # return list of links
    return formatLinks(baseURLIndex, results)

