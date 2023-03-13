const url = "https://mysocial-react.onrender.com";
const puppeteer = require("puppeteer");
const cron = require('node-cron');

const cronJob = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage();
  await page.goto(url)
  const selector = "button";
  await page.waitForSelector(selector);
  await page.click(selector);
  await delay(30*1000)
  await browser.close();
};

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }



cron.schedule("0 1 * * *", async () => await cronJob())