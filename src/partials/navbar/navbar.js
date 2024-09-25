let instance;

class NavbarPartial {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.onInit();

        return instance;
    }

    onInit() {
        const brand = document.querySelector('.navbar-collapse-brand');
        if (brand) {
            brand.addEventListener('click', this.onBrandClick)
        }
    }

    onBrandClick() {
        window.location.href = '../../components/home/home.html';
    }
}

export default NavbarPartial;