

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

    // Remove AD
    async removeAD2() {
        try {
            await browser.switchToFrame("google_ads_iframe_85406138/home_Int_660x440_0");
            let cancel = await $("#paloash_richmedia_close");
            await cancel.click();

        } catch (err) {
            console.log(err.message);
        }

    }

}

module.exports = new RemoveAD();