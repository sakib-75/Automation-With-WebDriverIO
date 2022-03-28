
class MenuBar {

    menuIcon() {
        return $('.hamburger-m__hamburger__2Oc5s');
    }

    async menuClick() {
        await this.menuIcon().click();
    }

}

module.exports = new MenuBar();