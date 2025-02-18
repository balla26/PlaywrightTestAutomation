const {test, expect} = require('@playwright/test')

test("Verify Error Message", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.viewportSize().width)

    console.log(await page.viewportSize().height)

    await page.getByPlaceholder("Username").type("Admin")

    await page.getByPlaceholder("Password").type("Admin")

    await page.locator("//button[normalize-space()='Login']").click()

    const errorMessage = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()

    console.log("Error Message is " + errorMessage)

    expect(errorMessage.includes("Invalid")).toBeTruthy()

    expect(errorMessage==="Invalid credentials").toBeTruthy()

})