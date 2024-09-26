import { test, Browser, Page, Locator, expect } from '@playwright/test'
import { chromium } from '@playwright/test'

test('Mouse hover', async () => {

    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto("https://www.bigbasket.com/pc/beverages/water/spring-water/?nc=nb");

    await page.locator('xpath=(//span[contains(text(),"Shop by")])[2]').click();
    await page.waitForTimeout(2000);
    await page.locator('xpath=(//a[contains(text(),"Beverages")])[2]').hover();
    await page.waitForTimeout(2000);
    await page.locator('xpath=(//a[text()="Water"])[1]').hover();
    await page.locator('xpath=//a[contains(text(),"Spring Water")]').click();

    //Landing on Spring water page and checking the spring water title 
    const title_locator = await page.locator('//h2[text()="Spring Water"]').textContent();
    console.log(title_locator)
    expect(title_locator).toBe('Spring Water')
    await page.waitForTimeout(9000);

})

test('Mouse hover of spicejet website', async () => {

    const browser: Browser = await chromium.launch({ headless: false })
    const page: Page = await browser.newPage();
    await page.goto('https://www.spicejet.com/');

    //hovering on page and landing to extra seat page
    await page.locator('xpath=//div[text()="Add-ons"]').hover();
    await page.locator('//div[text()="Extra Seat"]').click();
    await page.waitForTimeout(8000);
})














