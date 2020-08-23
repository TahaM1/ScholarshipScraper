import requests
import requests.exceptions
import time
import asyncio
from asyncRequests import fetch, writeFile
from main import scrapeSite, findALink


links = [
    "https://www.monsheong.org/",
    "https://www.fredfdn.ca/",
    "http://www.georgetownsoccerclub.com/Default.asp?id=home&l=1",
    "https://headwatersarts.com/",
    "https://www.oakvilleoptimistclub.com/",
]
LinkList = []
print(links)


# extract html docs
async def collectHTML():
    # HTMLlist = await asyncio.gather(*[fetch(url) for url in links])
    # print("Done Scraping!")
    # for n, html in enumerate(HTMLlist):
    #     if html != None:
    #         link = scrapeSite(html)
    #         if link != None:
    #             LinkList.append(link)
    linksToFetch = len(links)

    parsingQueue = asyncio.Queue()

    async def scrape(urlList, consumingQueue):
        nonlocal linksToFetch
        while linksToFetch > 0:
            html = await fetch(urlList[linksToFetch - 1])
            if html != None:
                await consumingQueue.put(html)
            linksToFetch -= 1

    async def parse(consumingQueue):
        nonlocal linksToFetch
        print(linksToFetch)
        while not consumingQueue.empty() or linksToFetch > 0:
            print("------------------------------------------------")
            html = await consumingQueue.get()
            link = scrapeSite(html)
            if link != None:
                print(link)
                LinkList.append(link)
            consumingQueue.task_done()

    await asyncio.gather(
        *[scrape(links, parsingQueue), parse(parsingQueue),]
    )


asyncio.run(collectHTML(), debug=True)


print(LinkList)

