import ModeService from "../../common/services/mode.service.js";
import NavbarLoaderService from "../../common/services/navbar-loader.service.js";

let instance;

const modeService = new ModeService();
const navbarLoaderService = new NavbarLoaderService();

class AboutMeComponent {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.onInit();

        return instance;
    }

    onInit() {
        modeService.initMode();
        navbarLoaderService.insertWithin('header').then(() => {
        });
    }
}

export default AboutMeComponent;