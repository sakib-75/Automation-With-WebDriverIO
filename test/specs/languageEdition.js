const languageEditionPage = require('../pageobjects/languageEdition.page');
const RemoveAD = require('./removeAD');

describe('Language Edition', () => {

    it('Bangla Edition', async () => {
        await browser.maximizeWindow()
        await languageEditionPage.open("https://www.prothomalo.com/");
        //await RemoveAD.removeAD1();
        await languageEditionPage.editionDropdown().moveTo();
        await languageEditionPage.banglaEdition().click();

    });

    it('English Edition', async () => {
        await languageEditionPage.open("https://www.prothomalo.com/");
        //await RemoveAD.removeAD1();
        await RemoveAD.removeNotificationWindow();
        await languageEditionPage.editionDropdown().moveTo();
        await languageEditionPage.englishEdition().click();

    });

    it('North USA Edition', async () => {
        await languageEditionPage.open("https://www.prothomalo.com/");
        //await RemoveAD.removeAD1();
        await RemoveAD.removeNotificationWindow();
        await languageEditionPage.editionDropdown().moveTo();
        await languageEditionPage.north_usaEdition().click();

    });

});