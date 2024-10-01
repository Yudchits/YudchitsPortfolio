import FadeService from "../../common/services/fade.service.js";
import ModeService from "../../common/services/mode.service.js";
import NavbarLoaderService from "../../common/services/navbar-loader.service.js";
import Component from "../component.js";

const modeService = new ModeService();
const navbarLoaderService = new NavbarLoaderService();
const fadeService = new FadeService();

class ExperienceComponent extends Component {

    constructor() {
        super();
    }

    async onInit() {
        modeService.initMode();
        await navbarLoaderService.insertWithin('header');
        this.startFadeAnimation();
    }

    startFadeAnimation() {
        const isFadeAnimationNeeded = document.querySelector('._fade-animation');
        if (isFadeAnimationNeeded) {
            fadeService.animate();
        }
    }
}

export default ExperienceComponent;