const MenuBar = require('../pageobjects/menu_bar');
const BusinessMenu = require('../pageobjects/business_menu.page');

describe('Business Menu', () => {

    it('Local Business', async () => {
        await browser.maximizeWindow()
        await BusinessMenu.open("https://en.prothomalo.com/");
        await MenuBar.menuClick();
        await BusinessMenu.business().click();
        await BusinessMenu.local().click();
        await browser.pause(2000);
    });

    it('Global Business', async () => {
        await BusinessMenu.open("https://en.prothomalo.com/");
        await MenuBar.menuClick();
        await BusinessMenu.business().click();
        await BusinessMenu.global().click();
        await browser.pause(2000);
    });


});