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
        console.log('on brand click');
    }
}

export default NavbarPartial;