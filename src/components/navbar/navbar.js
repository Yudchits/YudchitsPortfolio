import ModeService from "../../common/services/mode.service.js";

let instance;

const modeService = new ModeService();

class NavbarComponent {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.onInit();

        return instance;
    }

    onInit() {
        modeService.initMode();
    }
}

export default NavbarComponent;