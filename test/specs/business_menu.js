const MenuBar = require('../pageobjects/menu_bar');
const BusinessMenu = require('../pageobjects/business_menu.page');

describe('Business Menu', () => {

    it('Local Business', async () => {
        await browser.maximizeWindow()
        await BusinessMenu.open("https://en.prothomalo.com/");
        await MenuBar.menuClick();
        await BusinessMenu.business().click();
        await BusinessMenu.local().click();
        await expect(browser).toHaveUrlContaining('prothomalo.com/business/local');
    });

    it('Global Business', async () => {
        await BusinessMenu.open("https://en.prothomalo.com/");
        await MenuBar.menuClick();
        await BusinessMenu.business().click();
        await BusinessMenu.global().click();
        await expect(browser).toHaveUrlContaining('prothomalo.com/business/global');
    });


});