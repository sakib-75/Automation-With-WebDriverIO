const Page = require('./page');
const MenuBar = require('../pageobjects/menu_bar');

class BangladeshMenu extends Page {

    bangladesh() {
        return $("(//a[@aria-label='Bangladesh'])[2]");
    }

    politics() {
        return $("//a[@aria-label='Politics']");
    }

    accident() {
        return $("(//a[contains(text(),'Accident')])[1]");
    }

    crime() {
        return $("=Crime");
    }

    government() {
        return $("=Government");
    }

    async menuToBangladesh(url){
        await this.open(url);
        await MenuBar.menuClick();
        await this.bangladesh().click();
    }

    open(path) {
        return super.open(path);
    }

}

module.exports = new BangladeshMenu();