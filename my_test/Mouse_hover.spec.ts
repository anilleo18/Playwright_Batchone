import { test, Browser, Page, Locator } from '@playwright/test'
import { chromium } from '@playwright/test'

test('Mouse hover', async () => {

    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto("https://www.bigbasket.com/pc/beverages/water/spring-water/?nc=nb");




    await page.locator('xpath=(//span[contains(text(),"Shop by")])[2]').click();

    await page.waitForTimeout(5000);


    await page.locator('xpath=(//a[contains(text(),"Beverages")])[2]').hover();

    await page.waitForTimeout(5000);

    await page.locator('xpath=(//a[text()="Water"])[1]').hover();
    await page.locator('xpath=//a[contains(text(),"Spring Water")]').click();

    await page.waitForTimeout(9000);





})