import GoodList from "./GoodList.js";
import dataHandler from "../helpers/dataHandler.js";
import PurchasedGood from "./PurchasedGood.js";

export default class Cart extends GoodList {
    constructor() {
        super();
    }

    load() {
        super.load(dataHandler.getCart(), PurchasedGood);
    }

    add(good) {
        const findGood = this._goodList.find(item => item.id === good.id);
        if (findGood) {
            findGood.add();
        } else {
            super.add(good);
        }
    }

    decrease(id) {
        const findGood = this._goodList.find(item => item.id === good.id);
        if (findGood) {
            if (findGood.quantity > 1) {
                findGood.remove();
            } else {
                super.remove(id);
            }
        }
    }
}