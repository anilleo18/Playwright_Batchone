import { test, Browser, BrowserContext, Page, Locator } from '@playwright/test'
import { chromium } from '@playwright/test'
import path from 'path';

test('single file upload', async () => {

    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    page.goto("https://cgi-lib.berkeley.edu/ex/fup.html")

    //Now going to upload a file :
    await page.locator('xpath=//input[@name="upfile"]').setInputFiles("/Users/navyasree/Desktop/yolo/test1_yolo.txt");
    await page.waitForTimeout(4000);

})

test('Multiple file upload', async () => {

    const broswer: Browser = await chromium.launch({ headless: false })
    const page: Page = await broswer.newPage();
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    //Now uplaoding the multiple file in the system 
    await page.locator('//input[@name="filesToUpload"]').
        setInputFiles([path.join("/Users/navyasree/Desktop/yolo/test1_yolo.txt"),
        path.join("/Users/navyasree/Desktop/yolo/test1.png"),
        path.join("/Users/navyasree/Desktop/yolo/pdf_plumber.txt")
        ])

    await page.waitForTimeout(4000);









})



test('single file upload and remove', async () => {

    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    page.goto("https://cgi-lib.berkeley.edu/ex/fup.html")

    //Now going to upload a file ,we can upload with path.join or direct file loc if its one file :
    await page.locator('xpath=//input[@name="upfile"]').setInputFiles([path.join("/Users/navyasree/Desktop/yolo/test1_yolo.txt")]);
    await page.waitForTimeout(4000);

    //Delesecting uploaded file 
    await page.locator('xpath=//input[@name="upfile"]').setInputFiles([])
    await page.waitForTimeout(4000);

})



test('Creating our own file and uplaoding on Runtime ', async () => {

    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    page.goto("https://cgi-lib.berkeley.edu/ex/fup.html")

    //Now going to upload a file ,we can upload with path.join or direct file loc if its one file :
    await page.locator('xpath=//input[@name="upfile"]').setInputFiles({
        name: 'Anil_file.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('Hey Anil this is sample file uploaded  on run time ')
    });
    await page.waitForTimeout(9000);


})












