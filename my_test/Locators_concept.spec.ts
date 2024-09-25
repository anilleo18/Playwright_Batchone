import { test, Browser, Page, expect, Locator, BrowserContext } from '@playwright/test'
import { chromium, WebKitBrowser, firefox } from '@playwright/test'

test('Creating Package of locators', async () => {

    const browser: Browser = await chromium.launch({ headless: false })
    const page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');


    //Locator get by Role

    await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible();

    await expect(page.getByRole('link', { name: 'Transactions' })).toBeVisible();

    await expect(page.getByRole('radio', { name: 'No' })).toBeVisible();

    await page.getByRole('checkbox').click();

    //waitfortieout : Its like thread sleep :

    const continue_button: Locator = page.getByRole('button', { name: 'Continue' });
    expect(continue_button).toBeVisible();
    continue_button.click();
    await page.waitForTimeout(3000);

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

test.skip('launch in-cognito mode', async () => {

    const Browser_incognio: BrowserContext = await chromium.launchPersistentContext('', { headless: false });

    // It will open array of pages 
    const pages: Page[] = Browser_incognio.pages();

    //we are pricking 0 th index and continuing page here ...... 
    const page: Page = pages[0];
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.waitForTimeout(4000);


})

test('Locator chaining strategy', async () => {



    const broswer: Browser = await chromium.launch();
    const page: Page = await broswer.newPage();
    await page.goto("https://www.orangehrm.com/en/30-day-free-trial");

    // const element_form: Locator = page.locator('form#Form_getForm');
    // const button_trail: Locator = page.getByRole('button', { name: 'Get Your Free Trial' });
    // await element_form.locator(button_trail).click();
    // await page.waitForTimeout(3000);

    //orelse dont forget await in locators chaining comcept 
    // await page.locator('form#Form_getForm').locator('#Form_getForm_subdomain').fill("anil")
    //await page.locator('form#Form_getForm').getByRole('button', { name: 'Get Your Free Trial' }).click();

    //Reccomended way by playwright team ..This is orginal chaining 

    await page.locator('form#Form_getForm>>#Form_getForm_subdomain').fill("anil");
    await page.waitForTimeout(3000);










})