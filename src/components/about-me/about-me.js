import ModeService from "../../common/services/mode.service.js";
import FadeService from "../../common/services/fade.service.js";
import NavbarLoaderService from "../../common/services/navbar-loader.service.js";
import Component from "../component.js";

let instance;

const modeService = new ModeService();
const navbarLoaderService = new NavbarLoaderService();
const fadeService = new FadeService();

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
            fadeService.animate();
        });
    }
}

export default AboutMeComponent;