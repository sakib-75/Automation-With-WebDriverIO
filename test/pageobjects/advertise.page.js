const Page = require('./page');

class Advertise extends Page {

    advertisePage() {
        return $("=Advertise");
    }

    downloadRateCardBtn() {
        return $("(//a[@class='download-btn roboto-content'])[1]");
    }

    downloadMediaKitBtn() {
        return $("(//a[@class='download-btn roboto-content'])[2]");
    }

    open(path) {
        return super.open(path);
    }


}

module.exports = new Advertise();