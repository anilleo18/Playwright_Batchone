// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// //Hello Batch Welcome to the class !!!!!!!
import { Browser, Page, test, expect, Locator } from '@playwright/test'
import { chromium, WebKitBrowser, firefox } from '@playwright/test'

test('We are loggin as a first method', async () => {

  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
  const email: Locator = await page.locator('#input-email');
  const password: Locator = await page.locator('#input-password');
  const login_button: Locator = await page.locator("[value='Login']");

  await email.fill("anil.hanjk@gmail.com");
  await password.fill("Testing@123")
  await login_button.click()

  const tile_of_page = await page.title();
  console.log("hey please print the title : ", tile_of_page);


  await page.screenshot({ path: 'homepage.png' })

  expect(tile_of_page).toEqual('My Account');
  browser.close();



})