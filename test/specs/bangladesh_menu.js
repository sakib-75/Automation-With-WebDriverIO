const MenuBar = require('../pageobjects/menu_bar');
const BangladeshMenu = require('../pageobjects/bangladesh_menu.page');

describe('Bangladesh Menu', () => {

    it('Politics page', async () => {
        await browser.maximizeWindow()
        await BangladeshMenu.open("https://en.prothomalo.com/");
        await MenuBar.menuClick();
        await BangladeshMenu.bangladesh().click();
        await BangladeshMenu.politics().click();
        await expect(browser).toHaveUrlContaining('prothomalo.com/bangladesh/politics');
    });

    it('Accident page', async () => {
        await BangladeshMenu.open("https://en.prothomalo.com/");
        await MenuBar.menuClick();
        await BangladeshMenu.bangladesh().click();
        await BangladeshMenu.accident().click();
        await expect(browser).toHaveUrlContaining('prothomalo.com/bangladesh/accident');
    });

});