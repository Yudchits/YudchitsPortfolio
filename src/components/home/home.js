import FadeService from "../../common/services/fade.service.js";
import ModeService from "../../common/services/mode.service.js";
import NavbarLoaderService from "../../common/services/navbar-loader.service.js";
import Component from "../component.js";

const modeService = new ModeService();
const fadeService = new FadeService();
const navbarLoaderService = new NavbarLoaderService();

class HomeComponent extends Component {
    constructor() {
        super();
    }

    async onInit() {
        modeService.initMode();
        await navbarLoaderService.insertWithin('header');
        this.startFadeAnimation();
        this.addEventListeners();
    }

    startFadeAnimation() {
        const isFadeAnimationNeeded = document.querySelector('._fade-animation');
        if (isFadeAnimationNeeded) {
            fadeService.animate();
        }
    }

    addEventListeners() {
        const aboutMeBtn = document.querySelector('.about-me-btn');
        if (aboutMeBtn) {
            aboutMeBtn.addEventListener('click', this.onAboutMeBtnClick)
        }
    }

    onAboutMeBtnClick() {
        setTimeout(() => {
            document.location.href = '../about-me/about-me.html';
        }, 510);
    }
}

export default HomeComponent;