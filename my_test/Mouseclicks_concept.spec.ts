import { test, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { chromium } from '@playwright/test'

test('Mouse clicks and Actions', async () => {

    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

    //Double-Click Me To See Alert
    await page.getByText('Double-Click Me To See Alert').dblclick();
    await page.waitForTimeout(3000);

    //Right click
    await page.getByText("right click me").click({ button: 'right' });
    await page.waitForTimeout(3000);

    // SHIFT+CLICK
    await page.goto('https://the-internet.herokuapp.com/shifting_content');
    await page.getByText("Example 1: Menu Element").click({ modifiers: ['Shift'] });
    await page.waitForTimeout(3000);

    await browser.newContext()
    browser.close();

})


test('Drag and drop', async () => {

    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://jqueryui.com/droppable/');

    //Drag and Drop in easy way 
    const locator_one: Locator = await page.locator('xpath=//div[@id="draggable"]');
    const locator_two: Locator = await page.locator('xpath=//div[@id="droppable"]');
    await locator_one.dragTo(locator_two);
    await page.waitForTimeout(3000);

    //Drag and Drop offical way :
    await page.locator("#dragabble").hover();// first we need to hover on emelent 
    page.mouse.down(); // step 2: here we can consider as we are holding handdown on  the mouse
    page.locator('#droppable').hover(); //step 3  from down we wil land it on target dropabble element
    page.mouse.up() //step 4:here we can consider as we are leaving the mouse 









})











