import ModeService from "../../common/services/mode.service.js";
import FadeService from "../../common/services/fade.service.js";
import NavbarLoaderService from "../../common/services/navbar-loader.service.js";
import Component from "../component.js";

const modeService = new ModeService();
const navbarLoaderService = new NavbarLoaderService();
const fadeService = new FadeService();

class AboutMeComponent extends Component {
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
        const contactMeBtn = document.querySelector('.contact-me-btn');
        if (contactMeBtn) {
            contactMeBtn.addEventListener('click', this.onContactMeBtnClick);
        }
    }

    onContactMeBtnClick() {
        setTimeout(() => {
            document.location.href = '../contact/contact.html';
        }, 510);
    }
}

export default AboutMeComponent;