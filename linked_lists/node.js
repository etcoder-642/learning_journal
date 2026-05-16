export class Node {
    #_value = null;
    #_next = null;
    constructor(value = null, next = null) {
        this._value = value;
        this._next = next;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    get next() {
        return this._next;
    }
    set next(value) {
        this._next = value;
    }
}