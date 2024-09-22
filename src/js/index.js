import CookieService from "./services/cookie.service.js";

let instance;
const cookieService = new CookieService();
const setMode = (mode) => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.forEach(className => {
        wrapper.classList.remove(className);
    })
    wrapper.classList.add('wrapper');
    wrapper.classList.add(mode);
};

class Index {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.onInit();

        return instance;
    }

    onInit() {
        this.initMode();
    }

    initMode() {
        const mode = cookieService.getCookie('mode');
        if (!mode) {
            window.location.href = 'mode.html';
        }
        else {
            setMode(mode);
        }
    }
}

export default Index;