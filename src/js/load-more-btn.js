export default class LoadMoreBtn {
    constructor({selector, hidden = false}) {
        this.btn = document.querySelector(selector);

        hidden && this.hide();
    }

    show() {
        this.btn.classList.remove('is-hidden');
    }

    hide() {
        this.btn.classList.add('is-hidden');
    }
}