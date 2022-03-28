const Page = require('./page');
const RemoveAD = require('./removeAD');

class FollowUs extends Page {

    facebookLink(){
        return $("(//a[@aria-label='Prothom Alo Facebook Link'])[1]");
    }

    twitterLink() {
        return $("(//a[@aria-label='Prothom Alo Twitter Link'])[1]");
    }

    instragramLink() {
        return $("(//a[@aria-label='Prothom Alo Instagram Link'])[1]");
    }

    youtubeLink() {
        return $("(//a[@aria-label='Prothom Alo Youtube Link'])[1]");
    }

    
    async FollowUsCheck(element, url){
        await this.open("https://en.prothomalo.com");
        const elem = await $("#footer");
        await elem.scrollIntoView();
        await RemoveAD.acceptPrivacyPolicy();
        await RemoveAD.removeFooterAD();

        await element.click();
        await browser.switchWindow(url);
        await expect(browser).toHaveUrlContaining(url);
        
    }
    
    open(path) {
        return super.open(path);
    }

}

module.exports = new FollowUs();