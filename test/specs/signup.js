const signupPage = require('../pageobjects/login_signup.page');

describe('Signup', () => {

    it('Signup with facebook', async () => {
        await browser.maximizeWindow()
        await signupPage.homeToLoginPage("https://www.prothomalo.com/");
        await signupPage.createAccountLink().click();
        await signupPage.facebookBtn().click();

    });

    it('Signup with google', async () => {
        await signupPage.homeToLoginPage("https://www.prothomalo.com/");
        await signupPage.createAccountLink().click();
        await signupPage.googleBtn().click();

    });

    it('Signup with mail', async () => {
        await signupPage.homeToLoginPage("https://www.prothomalo.com/");
        await signupPage.createAccountLink().click();

        await signupPage.nameInput().setValue("Sakibul Islam");
        await signupPage.emailInput().setValue("sakibulislam285@gmail.com");
        await signupPage.passwordInput().setValue("123abc");
        await signupPage.confirmPasswordInput().setValue("123abc");

    });


});