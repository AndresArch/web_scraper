import puppeteer from "puppeteer";


const joshComeau = async () => {
  const url = "https://www.joshwcomeau.com/";
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);

  const allArticles = await page.evaluate(() => {
    const articles = document.querySelectorAll("article");

    return Array.from(articles)
      .slice(0, 3)
      .map((article) => {
        const title = article.querySelector("h3").innerText;
        const url = article.querySelector("a").href;
        return { title, url };
      });
  });

  console.log(allArticles);
};

joshComeau();

export {joshComeau};