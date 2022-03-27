const Page = require('./page');

class loginSignupPage extends Page {

    homeLoginBtn() {
        return $("(//button[@class='desktop-btn btn button-m__type4__3WG12'])[1]");
    }

    facebookBtn() {
        return $("//a[@aria-label='FACEBOOK Button']");
    }

    googleBtn() {
        return $("//a[@aria-label='GOOGLE Button']");
    }

    loginBtn() {
        return $("(//button[@class='button button-m__type3__3Bn4T'])[1]");
    }

    createAccountLink() {
        return $("//a[normalize-space()='Create an account']");
    }

    registerBtn() {
        return $("(//button[@class='button button-m__type3__3Bn4T'])[1]");
    }

    emailInput() {
        return $("[name='email']");
    }

    passwordInput() {
        return $("[name='password']");
    }

    nameInput() {
        return $("[name='name']")
    }

    confirmPasswordInput() {
        return $("[name='confirmPassword']")
    }


    async homeToLoginPage(url) {
        //await this.removeNotificationWindow();
        await this.removeAD1();
        await this.open(url);
        await this.homeLoginBtn().click();
    }


    /*
    async login(email, password) {
        let emailInput = await $("[name='email']");
        await emailInput.setValue(email);

        let passwordInput = await $("[name='password']");
        await passwordInput.setValue(password);
        await this.loginBtn().click();
    }
    */

    // Remove Notification Window
    async removeNotificationWindow() {
        try {
            let alertWindow = await $("#pe_close_btn_optin_1");
            await alertWindow.click();
        } catch (err) {
            console.log(err.message);
        }
    }

    // Remove AD
    async removeAD1() {
        try {
            await browser.switchToFrame("google_ads_iframe_85406138/home_Int_660x440_0");
            let cancel = await $("#paloash_richmedia_close");
            await cancel.click();

        } catch (err) {
            console.log(err.message);
        }

    }

    open(path) {
        return super.open(path);
    }

}

module.exports = new loginSignupPage();