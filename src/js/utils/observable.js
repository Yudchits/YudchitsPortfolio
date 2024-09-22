import Observer from "./observer.js";

const observers = [];

class Observable {
    constructor() {}

    subscribe(observer) {
        if (observer instanceof Observer) {
            if (!observers.includes(observer)) {
                observers.push(observer);
            }
        }
    }

    unsubscribe(observer) {
        const observerIndex = observers.findIndex(item => item === observer);
        if (observerIndex !== -1) {
            observers.splice(observerIndex, 1);
        }
    }

    notify(context) {
        observers.forEach(observer => observer.onNext(context));
    }
}

export default Observable;