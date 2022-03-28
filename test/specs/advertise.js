const Advertise = require('../pageobjects/advertise.page')
const RemoveAD = require('./removeAD')

describe("Advertise", () => {

    it("Download Rate Card", async () => {
        await browser.maximizeWindow();
        await Advertise.open("https://en.prothomalo.com/");
        const elem = await $(".print-footer-row2");
        await elem.scrollIntoView();
        await RemoveAD.acceptPrivacyPolicy();
        await RemoveAD.removeFooterAD();
        await Advertise.advertisePage().click();
        
        const elem2 = await $("(//p[@class='roboto-content'])[3]");
        await elem2.scrollIntoView();
        await Advertise.downloadRateCardBtn().click();

    });

    it("Download Media Kit", async () => {
        await browser.maximizeWindow();
        await Advertise.open("https://en.prothomalo.com/");
        const elem = await $(".print-footer-row2");
        await elem.scrollIntoView();
        await RemoveAD.acceptPrivacyPolicy();
        await RemoveAD.removeFooterAD();
        await Advertise.advertisePage().click();

        const elem2 = await $("(//p[@class='roboto-content'])[3]");
        await elem2.scrollIntoView();
        await Advertise.downloadRateCardBtn().click();

    });

});