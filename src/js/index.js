import ModeService from "./services/mode.service.js";

let instance;
const modeService = new ModeService();

class Index {
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

export default Index;