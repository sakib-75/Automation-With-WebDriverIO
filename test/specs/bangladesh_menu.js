const BangladeshMenu = require('../pageobjects/bangladesh_menu.page');

describe('Bangladesh Menu', () => {

    it('Politics page', async () => {
        await browser.maximizeWindow();
        await BangladeshMenu.menuToBangladesh("https://en.prothomalo.com/");
        await BangladeshMenu.politics().click();
        await expect(browser).toHaveUrlContaining('prothomalo.com/bangladesh/politics');
    });

    it('Accident page', async () => {
        await BangladeshMenu.menuToBangladesh("https://en.prothomalo.com/");
        await BangladeshMenu.accident().click();
        await expect(browser).toHaveUrlContaining('prothomalo.com/bangladesh/accident');
    });

    it('Crime page', async () => {
        await BangladeshMenu.menuToBangladesh("https://en.prothomalo.com/");
        await BangladeshMenu.crime().click();
        await expect(browser).toHaveUrlContaining('prothomalo.com/bangladesh/crime');
    });

    it('Government page', async () => {
        await BangladeshMenu.menuToBangladesh("https://en.prothomalo.com/");
        await BangladeshMenu.government().click();
        await expect(browser).toHaveUrlContaining('prothomalo.com/bangladesh/government');
    });

});