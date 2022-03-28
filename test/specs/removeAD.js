

class RemoveAD {

    // Remove Notification Window
    async removeNotificationWindow() {
        try {
            let alertWindow = await $("#pe_close_btn_optin_1");
            await alertWindow.click();
        } catch (err) {
            console.log(err.message);
        }
    }

    // Remove AD 1
    async removeAD1() {
        try {
            await browser.switchToFrame("google_ads_iframe_85406138/home_Int_660x440_0");
            let cancel = await $("#paloash_richmedia_close");
            await cancel.click();

        } catch (err) {
            console.log(err.message);
        }

    }

    // Remove AD 2
    async removeAD2() {
        try {
            await browser.switchToFrame("google_ads_iframe_85406138/home_Int_660x440_0__container__");
            let cancel = await $("//*[@id='closebutton']/img");
            await cancel.click();

        } catch (err) {
            console.log(err.message);
        }

    }

    // Remove AD 3
    async removeAD3() {
        try {
            await browser.switchToFrame("google_ads_iframe_85406138/News_Int_660x440_0");
            let cancel = await $("//*[@id='closebutton']/img");
            await cancel.click();

        } catch (err) {
            console.log(err.message);
        }

    }

    // Footer AD
    async removeFooterAD() {
        try{
            let closeAD = await $("(//div[@title='close'])[1]");
            await closeAD.click();

        } catch (err) {
            console.log(err.message);
        }
    }

    async acceptPrivacyPolicy() {
        try{
            let privacyPolicy = await $("#rcc-confirm-button");
            await privacyPolicy.click();
        }
        catch (err) {
            console.log(err.message);
        }
    }

}

module.exports = new RemoveAD();