const {test, expect} = require('@playwright/test')

test("Select Values From Dropdown", async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.locator("#state").selectOption({label: "Goa"})
    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption({value: "Telangana"})
    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption({index: 10})
    await page.waitForTimeout(1000)

    const value = await page.locator("#state").textContent()
    // console.log("all values:" + value)

    await expect(value.includes("Telangana")).toBeTruthy()

    await page.locator("#hobbies").selectOption(['Playing', 'Swimming'])
    await page.waitForTimeout(2000)
})