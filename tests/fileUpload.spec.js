const { test, expect } = require('@playwright/test')

test("Verify File Upload", async function({page}){
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("./upload/men.jpg")
    await page.locator("#file-submit").click()
    expect(await page.locator("//h3")).toHaveText("File Uploaded!")
    await expect(page.locator("#uploaded-files")).toHaveText("men.jpg");
})