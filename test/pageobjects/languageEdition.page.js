const Page = require('./page');

class languageEditionPage extends Page {

    editionDropdown() {
        return $(".dropdown-m__edition-label__1o4a-");
    }

    banglaEdition() {
        //return $("//a[@aria-label='বাংলা'])[1]");
    }

    englishEdition() {
        //return $("//a[@aria-label='English'])[1]");
    }

    north_usaEdition() {
        //return $("//a[@aria-label='উত্তর আমেরিকা'])[1]");
    }


    open(path) {
        return super.open(path);
    }

}

module.exports = new languageEditionPage();