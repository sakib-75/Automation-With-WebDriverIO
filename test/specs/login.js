const loginPage = require('../pageobjects/login_signup.page')

describe('Login', () => {

    it('Login with facebook', async () => {
        await browser.maximizeWindow();
        await loginPage.homeToLoginPage("https://www.prothomalo.com/");
        await loginPage.facebookBtn().click();
    });

    it('Login with google', async () => {
        await loginPage.homeToLoginPage("https://www.prothomalo.com/");
        await loginPage.googleBtn().click();
    });

    it("Login with mail", async () => {
        await loginPage.homeToLoginPage("https://www.prothomalo.com/");
        await loginPage.emailInput().setValue("sakibulislam285@gmail.com");
        await loginPage.passwordInput().setValue("123abc");
        await loginPage.loginBtn().click();

        //await loginPage.login("sakibulislam285@gmail.com", "123abc");

    });


});