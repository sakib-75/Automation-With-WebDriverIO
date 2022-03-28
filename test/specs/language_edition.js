const languageEditionPage = require('../pageobjects/language_edition.page');
const RemoveAD = require('./removeAD');

describe('Language Edition', () => {

    it('Bangla Edition', async () => {
        await browser.maximizeWindow()
        await languageEditionPage.open("https://www.prothomalo.com/");
        await RemoveAD.removeAD1();
        await languageEditionPage.editionDropdown().moveTo();
        await languageEditionPage.banglaEdition().click();
        await browser.pause(2000);
    });

    it('English Edition', async () => {
        await languageEditionPage.open("https://www.prothomalo.com/");
        await RemoveAD.removeAD1();
        await languageEditionPage.editionDropdown().moveTo();
        await languageEditionPage.englishEdition().click();
        await browser.pause(2000);
    });

    it('North USA Edition', async () => {
        await languageEditionPage.open("https://www.prothomalo.com/");
        await RemoveAD.removeAD1();
        await RemoveAD.removeNotificationWindow();
        await languageEditionPage.editionDropdown().moveTo();
        await languageEditionPage.north_usaEdition().click();
        await browser.pause(2000);
    });

});