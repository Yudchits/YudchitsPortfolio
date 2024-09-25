import ModeService from "../../common/services/mode.service.js";

let instance;

const modeService = new ModeService();

class ModeComponent {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.onInit();

        return instance;
    }

    onInit() {
        const modeBtn = document.querySelectorAll('.btn');
        modeBtn.forEach(btn => btn.addEventListener('click', this.onModeBtnClick));
    }

    onModeBtnClick(event) {
        const mode = event.target.getAttribute('data-mode');
        modeService.populateMode(mode);
        window.location.href = '../home/home.html';
    }
}

export default ModeComponent;