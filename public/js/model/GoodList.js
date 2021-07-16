import eventEmiter from "../helpers/eventEmmiter.js";

export default class GoodList {
    constructor() {
        this._goodList = [];
        this._eventEmiter = eventEmiter;
    }

    load(callback, goodClass) {
        this._goodList = callback().map(data => new goodClass(data));
    }

    add(good) {
        this._goodList.push(good);
    }

    remove(id) {
        this._goodList = this._goodList.filter(good => good.id !== id);
    }
}