import requests
from lxml import etree
import io

baseURLS = [
    "https://www.yellowpages.ca/search/si/1/-/-",
    "https://www.yellowpages.com/search?search_terms=-&geo_location_terms=Houston%2C+TX",
]

header = {"User-Agent": "Webscraper 3000"}


def embedKeyWords(baseURL, keywords, location):
    keywords = keywords.strip().replace(" ", "+")
    location = location.strip().replace(" ", "+")
    print(f"{keywords} {location}")
    baseURL = baseURL.replace("-", keywords, 1).replace("-", location, 1)
    return baseURL


url = embedKeyWords(str(baseURLS[0]), "dental clinic", "Orange Corners Omemee ON")

htmlDoc = requests.get(url, headers=header).content


htmlTree = etree.parse(io.BytesIO(htmlDoc), etree.HTMLParser(encoding="utf-8"))

results = htmlTree.xpath("//span[text() = 'Website']/../@href")
for result in results:
    result = "https://www.yellowpages.ca" + result
    print(result)
print(len(results))
