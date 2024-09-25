import ModeService from "../../common/services/mode.service.js";
import NavbarLoaderService from "../../common/services/navbar-loader.service.js";
import Component from "../component.js";

let instance;

const modeService = new ModeService();
const navbarLoaderService = new NavbarLoaderService();

class AboutMeComponent extends Component {
    constructor() {
        super();
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    onInit() {
        modeService.initMode();
        navbarLoaderService.insertWithin('header').then(() => {
        });
    }
}

export default AboutMeComponent;