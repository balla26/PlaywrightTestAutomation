const {test, expect} = require('@playwright/test')

test("verify application title using loop", async function({page}){
    await page.goto("https://www.google.com/")
    await page.locator("textarea[name='q']").type("Mukesh Otwani")
    await page.waitForSelector("//div[@role='presentation']")
    const elements = await page.$$("//div[@role='presentation']")
    for (let i=0; i<elements.length; i++){
        const text = await elements[i].textContent()
        if (text.includes('playwright')){
            await elements[i].click()
            break
        }
    }
})