import ModeService from "./services/mode.service.js";

let instance;

const modeService = new ModeService();

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
        modeService.populateMode(mode);
        window.location.href = 'index.html';
    }
}

export default Mode;