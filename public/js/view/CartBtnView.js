export default class CartBtnView {
    constructor(goodsCount) {
        this._data = goodsCount;
    }

    getHtml() {
        return `<a class="cart-menu" href="#"><img src="img/cart.svg" alt="cart">
                    <span class="cart-quantity">${this._data}</span>
                </a>`;
    }

    render($container, target = 'beforeend') {
        $container.insertAdjacentHTML(target, this.getHtml());
    }
}