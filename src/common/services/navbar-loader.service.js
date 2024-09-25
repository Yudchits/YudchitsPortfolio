import NavbarPartial from "../../partials/navbar/navbar.js";

let instance;

class NavbarLoaderService {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    insertWithin(selector) {
        return fetch('../../partials/navbar/navbar.html')
            .then(response => response.text())
            .then(data => {
                document.querySelector(selector).insertAdjacentHTML('afterbegin', data);
                
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = '../../partials/navbar/navbar.css';
                document.head.appendChild(link);
                
                return new Promise((resolve) => {
                    link.onload = resolve;
                    link.onerror = () => console.error('Error loading CSS');
                });
            })
            .then(() => {
                new NavbarPartial();
            })
            .catch(error => console.error('Error loading navbar:', error));
    }
    
}

export default NavbarLoaderService;