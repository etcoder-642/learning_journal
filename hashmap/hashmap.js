import { createLinkedList } from "./hashlinkedLists.js";

export class HashMap {
    #_loadfactor = 0.75;
    #_capacity;
    #_container = [];

    constructor(capacity = 16) {
        this.#_capacity = capacity;
        this.#_container = new Array(capacity).fill(null);
    }

    get loadfactor() {
        return this.#_loadfactor;
    }

    get capacity() {
        return this.#_capacity;
    }

    get container() {
        return this.#_container;
    }

    set capacity(capacity) {
        this.#_capacity = capacity;
    }

    set container(container) {
        this.#_container = container;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }

    set(key, value) {
        const hashCode = this.hash(key) % this.capacity;
        if (this.container[hashCode] == null) {
            this.container[hashCode] = createLinkedList();
        }
        this.container[hashCode].append(key, value);

        if (this.length() >= this.capacity * this.loadfactor) {
            this.resize(this.capacity * 2);
        }
    }

    resize(capacity) {
        this.capacity = capacity;
        let tempContainer = this.container;

        this.container = new Array(this.capacity).fill(null);
        for (let i = 0; i < tempContainer.length; i++) {
            if (tempContainer[i] == null) continue;
            const entries = tempContainer[i].getEntries();

            for (let j = 0; j < entries.length; j++) {
                if (entries[j]) {
                    const hashCode = Math.abs(this.hash(entries[j].key) % this.capacity);

                    if (this.container[hashCode] == null)
                        this.container[hashCode] = createLinkedList();
                    this.container[hashCode].append(entries[j].key, entries[j].value);
                }
            }
        }
    }

    get(key) {
        const hashCode = this.hash(key) % this.capacity;
        if (this.container[hashCode] == null) {
            return null;
        }
        return this.container[hashCode].getValue(key);
    }

    has(key) {
        const hashCode = this.hash(key) % this.capacity;
        if (this.container[hashCode] == null) {
            return false;
        }
        return this.container[hashCode].contains(key);
    }

    remove(key) {
        const hashCode = this.hash(key) % this.capacity;
        if (this.container[hashCode] == null) {
            return false;
        }
        return this.container[hashCode].remove(key);
    }

    length() {
        let _length = 0;
        for (let i = 0; i < this.container.length; i++) {
            if (this.container[i] != null) {
                _length += this.container[i].size();
            }
        }
        return _length;
    }

    keys() {
        let _keys = [];
        for (let i = 0; i < this.container.length; i++) {
            if (this.container[i] != null) {
                _keys.push([...this.container[i].getKeys()]);
            }
        }
        return _keys;
    }

    values() {
        let _values = [];
        for (let i = 0; i < this.container.length; i++) {
            if (this.container[i] != null) {
                _values.push([...this.container[i].getValues()]);
            }
        }
        return _values;
    }

    entries() {
        let _entries = [];
        for (let i = 0; i < this.container.length; i++) {
            if (this.container[i] != null) {
                _entries.push([...this.container[i].getEntries()]);
            }
        }
        return _entries;
    }

    clear() {
        let _container = new Array(this.capacity).fill(null);
        this.container = _container;
    }
}