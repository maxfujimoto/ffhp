const puppeteer = require("puppeteer");
const cheerio = require ("cheerio");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://boards.4channel.org/g/catalog");
  //await page.screenshot({ path: "gCatalog.png"});

    const gCatalogHtml = await page.evaluate(() => {
	return {
	    html: document.documentElement.innerHTML,
	};
    });

    const $ = cheerio.load(gCatalogHtml.html);
    
    //const gThreadUrls =
    $(".thread a").each((i, el) => {
	const gUrls = $(el).attr("href");

	console.log(gUrls);
    });
    
  await browser.close();
})();
