import NavbarPartial from "../../partials/navbar/navbar.js";

document.addEventListener("DOMContentLoaded", function() {
    fetch('../../partials/navbar/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').insertAdjacentHTML('afterbegin', data);
            
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '../../partials/navbar/navbar.css';
            document.head.appendChild(link);
            
            new NavbarPartial();
        })
        .catch(error => console.error('Error loading navbar:', error));
});