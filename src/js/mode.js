import CookieService from "./services/cookie.service.js";

let instance;

const cookieService = new CookieService();

class Mode {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.onInit();

        return instance;
    }

    onInit() {
        const modeBtn = document.querySelectorAll('.mode-btn');
        modeBtn.forEach(btn => btn.addEventListener('click', this.onModeBtnClick));
    }

    onModeBtnClick(event) {
        const mode = event.target.getAttribute('data-mode');
        cookieService.setCookie('mode', mode);
        window.location.href = 'index.html';
    }
}

export default Mode;