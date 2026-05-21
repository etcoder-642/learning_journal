export class Node {
    #_key = null;
    #_value = null;
    #_next = null;
    constructor(key = null, value = null, next = null) {
        this._key = key;
        this._value = value;
        this._next = next;
    }
    get key() {
        return this._key;
    }
    set key(key) {
        this._key = key;
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