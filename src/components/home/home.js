import FadeService from "../../common/services/fade.service.js";
import ModeService from "../../common/services/mode.service.js";
import NavbarLoaderService from "../../common/services/navbar-loader.service.js";

let instance;

const modeService = new ModeService();
const fadeService = new FadeService();
const navbarLoaderService = new NavbarLoaderService();

class HomeComponent {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.onInit();

        return instance;
    }

    onInit() {
        modeService.initMode();
        this.startFadeAnimation('header');
        
        const aboutMeBtn = document.querySelector('.about-me-btn');
        if (aboutMeBtn) {
            aboutMeBtn.addEventListener('click', this.onAboutMeBtnClick)
        }
    }

    startFadeAnimation(selector) {
        navbarLoaderService.insertWithin(selector).then(async () => {
            const isFadeAnimationNeeded = document.querySelector('._fade-animation');
            if (isFadeAnimationNeeded) {
                fadeService.animate();
            }
        });
    }

    onAboutMeBtnClick() {
        //document.location.href = '../about-me/about-me.html';
    }
}

export default HomeComponent;