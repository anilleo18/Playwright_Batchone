import { test, Browser, Page, expect, Locator } from '@playwright/test'
import { chromium, WebKitBrowser, firefox } from '@playwright/test'

test('Creating Package of locators', async () => {

    const browser: Browser = await chromium.launch({ headless: false })
    const page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //create a web element and perform some action  and perform some fill or click action 

    const fistname_element: Locator = page.locator('id=input-firstname');
    const last_name: Locator = page.locator('id=input-lastname');

    //Now fill with Details 

    await fistname_element.fill("anilleo");
    await last_name.fill("sample123");

    //Need of screen shot :
    await page.screenshot({ path: 'test-results/screenshots/homepage.png' })

    //Locators designed with X- path 

    await page.locator('xpath=//input[@type="email"]').fill("anilleo18@gmail.com");

    await page.locator('xpath= //input[@name="telephone"]').fill("9652019876");

    await page.locator('xpath=//input[@name="password" and @type="password"]').fill("Alphadata@123");

    await page.locator('xpath=//input[@name="confirm" and @type="password"]').fill("Alphadata@123");

    await page.locator('xpath=//input[@name="agree" and @type="checkbox"]').click();

    screenshot_mydir(page);


    await page.locator('xpath=//input[@type="submit"]').click();

    //We can use getbyTest method : we can design our own testid custom testid attribute

    //await page.getByTestId('xpath=//input[@type="submit"]').click();







})

async function screenshot_mydir(page: Page): Promise<void> {
    const num: number = Math.random() * 10;
    await page.screenshot({ path: `test-results/screenshots/homepage${num}.png` })
}