import AboutMeComponent from "./components/about-me/about-me.js";
import ContactComponent from "./components/contact/contact.js";
import ExperienceComponent from "./components/experience/experience.js";
import HomeComponent from "./components/home/home.js";
import ModeComponent from "./components/mode/mode.js";

function getCurrentPage() {
    const path = window.location.pathname;

    if (path.includes('home.html')) {
        return 'index';
    } else if (path.includes('mode.html')) {
        return 'mode';
    } else if (path.includes('about-me.html')) {
        return 'about-me';
    } else if (path.includes('experience.html')) {
        return 'experience';
    } else if (path.includes('contact.html')) {
        return 'contact';
    }

    return undefined;
}

function createCurrentPage(page) {
    switch (page) {
        case 'index':
            return new HomeComponent();
        case 'mode':
            return new ModeComponent();
        case 'about-me':
            return new AboutMeComponent();
        case 'experience':
            return new ExperienceComponent();
        case 'contact':
            return new ContactComponent();
        default:
            throw new Error('Cannot create component');
    }
}

const currentPage = getCurrentPage();
if (currentPage) {
    const component = createCurrentPage(currentPage);
    component.onInit();
}