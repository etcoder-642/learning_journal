

export class Node {
    #_data;
    #_left;
    #_right;

    constructor(data = null, left = null, right = null){
        this.#_data = data;
        this.#_left = left;
        this.#_right = right;
    }

    get data() {
        return this.#_data;
    }

    get left() {
        return this.#_left;
    }

    get right() {
        return this.#_right;
    }

    set data(data) {
        this.#_data = data;
    }

    set left(left) {
        this.#_left = left;
    }

    set right(right) {
        this.#_right = right;
    }
}