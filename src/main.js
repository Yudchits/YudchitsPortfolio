import HomeComponent from "./components/home/home.js";
import ModeComponent from "./components/mode/mode.js";

function getCurrentPage() {
    const path = window.location.pathname;

    if (path.includes('home.html')) {
        return 'index';
    } else if (path.includes('mode.html')) {
        return 'mode';
    }

    return undefined;
}

function createCurrentPage(page) {
    switch (page) {
        case 'index':
            return new HomeComponent();
        case 'mode':
            return new ModeComponent();
        default:
            return undefined;
    }
}

const currentPage = getCurrentPage();
if (currentPage) {
    createCurrentPage(currentPage);
}