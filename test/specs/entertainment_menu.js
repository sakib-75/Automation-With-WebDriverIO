const MenuBar = require('../pageobjects/menu_bar');
const EntertainmentMenu = require('../pageobjects/entertainment_menu.page')

describe("Entertainment Menu", () => {

    it("Dhallywood Page", async () => {
        await browser.maximizeWindow()
        await EntertainmentMenu.open("https://en.prothomalo.com/");
        await MenuBar.menuClick();
        await EntertainmentMenu.entertainment().click();
        await EntertainmentMenu.dhallywood().click();
        await expect(browser).toHaveUrlContaining('prothomalo.com/entertainment/dhallywood');
    });

    it("Bollywood Page", async () => {
        await EntertainmentMenu.open("https://en.prothomalo.com/");
        await MenuBar.menuClick();
        await EntertainmentMenu.entertainment().click();
        await EntertainmentMenu.bollywood().click();
        await expect(browser).toHaveUrlContaining('prothomalo.com/entertainment/bollywood');
    });

    it("Bollywood Page", async () => {
        await EntertainmentMenu.open("https://en.prothomalo.com/");
        await MenuBar.menuClick();
        await EntertainmentMenu.entertainment().click();
        await EntertainmentMenu.hollywood().click();
        await expect(browser).toHaveUrlContaining('prothomalo.com/entertainment/hollywood');
    });
    
});