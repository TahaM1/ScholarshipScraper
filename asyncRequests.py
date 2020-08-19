import asyncio
import aiohttp
import time

header = {
    "User-Agent": "Web Scraper 3000",
    "Connection": "keep-alive",
}

# prints how fast a function finishes
def performance(func):
    def wrapper():
        t = time.perf_counter()
        func()
        t2 = time.perf_counter() - t
        print(t2)

    return wrapper


# Writes Binary Data into a HTML file located in test folder
def writeFile(name, html):
    filename = f"test/{name}.html"
    with open(filename, "wb") as f:
        f.write(html)
        print(f"finished writing{filename}")


# Fetches html document from site and returns Binary response
async def fetch(url):
    try:
        t1 = time.perf_counter()
        async with aiohttp.request("GET", url, headers=header) as response:
            html = await response.read()
            t2 = time.perf_counter()
            print(f"{t2 - t1} {url}")
            return html
    except Exception:
        print(f"{url} was not accessible")
        return None


async def test():
    list = [
        "https://www.monsheong.org/",
        "https://www.fredfdn.ca/",
        "http://www.georgetownsoccerclub.com/Default.asp?id=home&l=1",
        "https://headwatersarts.com/",
        "https://www.oakvilleoptimistclub.com/",
    ]
    t1 = time.perf_counter()
    htmlList = await asyncio.gather(*[fetch(url) for url in list])
    print(len(htmlList))
    print(time.perf_counter() - t1)

    for n, html in enumerate(htmlList):
        await writeFile(n, html)


if __name__ == "__main__":

    loop = asyncio.get_event_loop()
    loop.run_until_complete(test())
