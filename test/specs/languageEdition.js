const languageEditionPage = require('../pageobjects/languageEdition.page');

describe('Language Edition', () => {

    it('Bangla Edition', async () => {
        await browser.maximizeWindow()
        await languageEditionPage.open("https://www.prothomalo.com/");
        await languageEditionPage.editionDropdown().moveTo();


    });

});