const {test, expect} = require('@playwright/test')
const LoginPage = require('../pages/loginPage')
const HomePage = require('../pages/homepage')

test('Login to application using POM', async ({page}) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginPage = new LoginPage(page)
    await loginPage.loginToApplication()

    const homePage = new HomePage(page)
    await homePage.verifyManageOption()
    await homePage.logoutFromApplication()

    await loginPage.verifySignIn()
})