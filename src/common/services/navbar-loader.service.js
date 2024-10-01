import NavbarPartial from "../../partials/navbar/navbar.js";

let instance;

class NavbarLoaderService {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    async insertWithin(selector) {
        try {
            const response = await fetch('../../partials/navbar/navbar.html');
            const data = await response.text();
            document.querySelector(selector).insertAdjacentHTML('afterbegin', data);

            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '../../partials/navbar/navbar.css';
            document.head.appendChild(link);
            await new Promise((resolve) => {
                link.onload = resolve;
                link.onerror = () => console.error('Error loading CSS');
            });
            new NavbarPartial().onInit();
        } catch (error) {
            return console.error('Error loading navbar:', error);
        }
    }
    
}

export default NavbarLoaderService;