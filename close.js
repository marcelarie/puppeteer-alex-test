import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: __dirname + "/myChromeSession",
  });
  const page = await browser.newPage();
  await page.goto("https://rrhh.tramitapp.com/");

  const buttonClasses =
    "button.tw-bg-state-red.tw-h-72.tw-w-72.tw-rounded-full";
  await page.waitForSelector(buttonClasses);
  await page.click(buttonClasses);

  const closeClasses =
    "button.tw-pb-8.btn.btn-block.btn-lg.btn-danger.waves-effect.waves-light";
  await page.waitForSelector(closeClasses);
  await page.click(closeClasses);
})();
