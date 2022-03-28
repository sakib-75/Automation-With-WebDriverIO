const Page = require('./page');

class languageEditionPage extends Page {

    editionDropdown() {
        return $(".dropdown-m__edition-label__1o4a-");
    }

    banglaEdition() {
        return $("//*[@id='header']/div/div/div/div/div[1]/div[3]/div[2]/div[2]/div/ul/li[1]/a/input");
    }

    englishEdition() {
        return $("//a[@aria-label='English'])[1]");
    }

    north_usaEdition() {
        return $("//*[@id='header']/div/div/div/div/div[1]/div[3]/div[2]/div[2]/div/ul/li[3]/a/input");
    }


    open(path) {
        return super.open(path);
    }

}

module.exports = new languageEditionPage();