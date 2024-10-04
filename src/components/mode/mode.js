import ModeService from "../../common/services/mode.service.js";
import Component from "../component.js";

const modeService = new ModeService();

class ModeComponent extends Component {
    constructor() {
        super();
    }

    onInit() {
        const modeBtn = document.querySelectorAll('.btn');
        modeBtn.forEach(btn => btn.addEventListener('click', this.onModeBtnClick));
    }

    onModeBtnClick(event) {
        setTimeout(() => {
            const mode = event.target.getAttribute('data-mode');
            modeService.populateMode(mode);
            window.location.href = '../home/home.html';
        }, 510);
    }
}

export default ModeComponent;