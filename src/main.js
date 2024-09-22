import HomeComponent from "./components/home/home.js";
import ModeComponent from "./components/mode/mode.js";
import NavbarComponent from "./components/navbar/navbar.js";

function getCurrentPage() {
    const path = window.location.pathname;

    if (path.includes('home.html')) {
        return 'index';
    } else if (path.includes('mode.html')) {
        return 'mode';
    } else if (path.includes('navbar.html')) {
        return 'navbar';
    }

    return undefined;
}

function createCurrentPage(page) {
    switch (page) {
        case 'index':
            return new HomeComponent();
        case 'mode':
            return new ModeComponent();
        case 'navbar':
            return new NavbarComponent();
        default:
            return undefined;
    }
}

const currentPage = getCurrentPage();
if (currentPage) {
    createCurrentPage(currentPage);
}