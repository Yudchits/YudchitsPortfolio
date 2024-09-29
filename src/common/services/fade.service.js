let instance;

class FadeService {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    animate() {
        document.addEventListener('scroll', this.onScroll);
        this.onScroll();
    }

    async onScroll() {
        const fadeItems = document.querySelectorAll('._fade-animation');
        const delay = 300;
    
        for (const fadeItem of fadeItems) {
            const rect = fadeItem.getBoundingClientRect();
            const distanceFromTop = rect.top + window.scrollY;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
    
            if (distanceFromTop >= scrollY && 
                (distanceFromTop < (windowHeight + scrollY) 
                    || ((distanceFromTop + fadeItem.innerHeight) < (windowHeight + scrollY)))) {
                fadeItem.classList.add('_faded');
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }    
}

export default FadeService;