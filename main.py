import requests
from lxml import *
from lxml import etree
import io
import time

# headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}

url1 = "http://www.miltonchamber.ca/"
url2 = "https://www.mpl.on.ca/"
headers = {"User-Agent": "Web Scraper 3000"}

# HTML DOCUMENT in Bytes
htmlDoc = requests.get(url1, headers=headers).content

# Parses the Bytes and returns a ElementTree object
htmlTree = etree.parse(io.BytesIO(htmlDoc), etree.HTMLParser())

# Note: Xpath is a language for navigating through a XML file structure


result = htmlTree.xpath(
    "//a[contains(lower-case(text()),'grant') or contains(lower-case(text()),'scholarship')]"
)

for element in result:
    link = element.attrib["href"]
    print(link)
    print(element.text)

print(result)
