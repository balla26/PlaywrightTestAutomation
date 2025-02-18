const {test, expect} = require('@playwright/test')

test("Key board Events in playwright", async ({page}) => {
    await page.goto("https://www.google.com/")
    await page.locator("textArea[name='q']").type("Vamshi Bharath Balla")
    await page.locator("textarea[name='q']").press("Control+A")
    await page.locator("textArea[name='q']").press("ArrowDown")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Control+V")
    // await page.keyboard.press("Enter")
})
