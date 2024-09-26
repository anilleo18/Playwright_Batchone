import { test, Browser, Page, Locator } from '@playwright/test'
import { chromium } from '@playwright/test'


test('Practising with select class', async () => {

    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://www.magupdate.co.uk/reader-enquiry/pbai/212');

    const select_xpath = '//select[@id="Contact_CountryCode"]'

    //want to select with Text
    await page.selectOption(select_xpath, { label: 'Bahamas' })


    // want to select with value 
    // await page.selectOption(select_xpath, { value: "AR" })

    //want to select with index 
    //await page.selectOption(select_xpath, { index: 20 })

    await page.waitForTimeout(9000);
})


test('Slelect with looping all the text ', async () => {

    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://www.magupdate.co.uk/reader-enquiry/pbai/212');

    const select_xpath = '//select[@id="Contact_CountryCode"]'

    const lists_options = await page.$$('//select[@id="Contact_CountryCode"]/option');

    console.log(lists_options.length);


    for (const element of lists_options) {

        const text_ele = await element.textContent();

        if (text_ele == 'India') {

            await page.selectOption(select_xpath, { label: text_ele });
            break;

        }



    }
    await page.waitForTimeout(9000);



})