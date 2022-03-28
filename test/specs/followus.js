const FollowUs = require('../pageobjects/followus.page')


describe('Follow us', () => {

    it('Follow with facebook', async ()=> {
        await browser.maximizeWindow();
        let url = "facebook.com/ProthomAloEnglish";
        let element = FollowUs.facebookLink();
        await FollowUs.FollowUsCheck(element, url);

    });

});