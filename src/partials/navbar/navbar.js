class NavbarPartial {
    constructor() {}

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