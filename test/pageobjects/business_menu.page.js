const Page = require('./page');

class BusinessMenu extends Page{

    business() {
        return $("(//a[@aria-label='Business'])[2]");
    }

    local() {
        return $("=Local");
    }

    global() {
        return $("=Global");
    }

    open(path) {
        return super.open(path);
    }

}

module.exports = new BusinessMenu();