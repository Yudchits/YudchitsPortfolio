import CookieService from "./cookie.service.js";

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

class ModeService {

    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    initMode() {
        const mode = cookieService.getCookie('mode');
        if (!mode) {
            window.location.href = '../../components/mode/mode.html';
        }
        else {
            setMode(mode);
        }
    }

    populateMode(mode) {
        cookieService.setCookie('mode', mode);
        setMode(mode);
    }
}

export default ModeService;