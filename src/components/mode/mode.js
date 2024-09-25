import ModeService from "../../common/services/mode.service.js";
import Component from "../component.js";

let instance;

const modeService = new ModeService();

class ModeComponent extends Component {
    constructor() {
        super();
        if (!instance) {
            instance = this;
        }

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