import Index from "./index.js";
import Mode from "./mode.js";

function getCurrentPage() {
    const path = window.location.pathname;

    if (path.includes('index.html')) {
        return 'index';
    } else if (path.includes('mode.html')) {
        return 'mode';
    }

    return undefined;
}

function createCurrentPage(page) {
    switch (page) {
        case 'index':
            return new Index();
        case 'mode':
            return new Mode();
        default:
            return undefined;
    }
}

const currentPage = getCurrentPage();
if (currentPage) {
    createCurrentPage(currentPage);
}