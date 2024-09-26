import { test, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { chromium } from '@playwright/test'

test('Sequential enetering of charecters', async () => {

    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://www.amazon.in/');
    await page.getByPlaceholder('Search Amazon.in').pressSequentially("jeans", { delay: 1000 })
    await page.waitForTimeout(4000);

})




