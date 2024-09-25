import { Browser, Page, test, Locator, expect, BrowserContext } from '@playwright/test'
import { chromium, firefox, webkit } from '@playwright/test'

test('Hey this is our first login test', async () => {

    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const Login_page = await page.locator('#input-email');
    const password = await page.locator('#input-password');
    const login_button = await page.locator("[value='Login']");

    await Login_page.fill("anil.hanjk@gmail.com");
    await password.fill("Testing@123")
    await login_button.click();

    const title_page: string = await page.title();
    console.log(title_page);
    await page.screenshot({ path: 'test-results/screenshots/homepage.png' })

    expect(title_page).toEqual('My Account');
    browser.close();

})

test('This is our second context click test', async () => {

    //Broswer Alpha is opening here with Browser context chrome will
    //open in :INCOGNITO MODE
    const browser: Browser = await chromium.launch({ headless: false });
    const browser_alpha: BrowserContext = await browser.newContext();
    const page: Page = await browser_alpha.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const Login_page = await page.locator('#input-email');
    const password = await page.locator('#input-password');
    const login_button = await page.locator("[value='Login']");

    await Login_page.fill("anil.hanjk@gmail.com");
    await password.fill("Testing@123")
    await login_button.click();

    const title_page: string = await page.title();
    console.log(title_page);
    await page.screenshot({ path: 'test-results/screenshots/homepage.png' })

    expect(title_page).toEqual('My Account');

    //Browser Beta will open here :
    const browser_beta: BrowserContext = await browser.newContext();
    const page_beta: Page = await browser_beta.newPage();
    await page_beta.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");


    //Locators started:
    await page_beta.locator('#input-email').fill('Userpw@pw.com');;
    await page_beta.locator('#input-password').fill('Test@123');
    await page_beta.locator("[value='Login']").click();

    await browser_alpha.close();
    await browser_beta.close();
    await browser.close();


})

test.skip('Basic auth pop up handling', async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const browsercontext: BrowserContext = await browser.newContext();
    const page: Page = await browsercontext.newPage();

    const User_name = 'admin';
    const password_name = 'admin'
    page.setExtraHTTPHeaders({ Authorization: create_authorizationHeader_B64(User_name, password_name) });
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    await new Promise(() => { })

})

function create_authorizationHeader_B64(User_name: any, password_name: any) {
    console.log('Basic' + btoa(User_name + ':' + password_name));
    return 'Basic' + btoa(User_name + ':' + password_name)
}