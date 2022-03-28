const Page = require('./page');

class EntertainmentMenu extends Page {

    entertainment() {
        return $("(//a[@aria-label='Entertainment'])[2]");
    }

    dhallywood() {
        return $("=Dhallywood");
    }

    bollywood() {
        return $("=Bollywood");
    }

    hollywood() {
        return $("=Hollywood");
    }

    open(path) {
        return super.open(path);
    }


}

module.exports = new EntertainmentMenu();