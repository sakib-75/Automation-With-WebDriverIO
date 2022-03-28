const Page = require('./page');

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

    open(path) {
        return super.open(path);
    }

}

module.exports = new BangladeshMenu();