import { Node } from './node.js';

export const createLinkedList = () => {
    let _initial_node = new Node(null, null);
    let _length = 0;
    return {
        append: function (value) {
            const newNode = new Node(value, null);
            if(_initial_node.value == null) {
                _initial_node.value = value;
                _length++;
                return;
            }
            if (_initial_node.next === null) {
                _initial_node.next = newNode;
            } else {
                let currentNode = _initial_node.next;
                while (currentNode.next != null) {
                    currentNode = currentNode.next;
                }
                currentNode.next = newNode;
            }
            _length++;
        },
        prepend: function (value) {
            if (_initial_node.value == null) {
                _initial_node.value = value;
            } else {
                let newNode = new Node(value, _initial_node);
                _initial_node = newNode;
            }
            _length++;
        },
        size: function () {
            return _length;
        },
        head: function () {
            return (_initial_node.value == null) ? undefined : _initial_node.value;
        },
        tail: function () {
            let node = _initial_node;
            while (node.next != null) {
                node = node.next;
            }
            return node.value;
        },
        at: function (index) {
            let count = 0;
            let node = _initial_node;
            while (node != null) {
                if (count == index) {
                    return node.value;
                }
                node = node.next;
                count++;
            }
            return undefined;
        },
        pop: function () {
            if (_initial_node.next == null) {
                _initial_node.value = null;
            } else {
                let node = _initial_node;
                while (node.next.next != null) {
                    node = node.next;
                }
                node.next = null;
            }
            _length--;
        },
        contains: function (value) {
            let node = _initial_node;
            while (node != null) {
                if (node.value == value) return true;
                node = node.next;
            }
            return false;
        },
        findIndex: function (value) {
            let count = 0;
            let node = _initial_node;
            while (node != null) {
                if (node.value == value) return count;
                node = node.next;
                count++;
            }
            return -1;
        },
        toString: function () {
            let str = "(";
            let node = _initial_node;
            while (node.next != null) {
                str += " " + node.value + ") -> (";
                node = node.next;
            }
            if (node.value != null)
                str += " " + node.value + ") -> (";
            str += " )";
            return str;
        },
        insertAt: function (index, ...values) {
            let arr = [...values];
            let count = 1;
            let node = _initial_node;
            if (index == 0 && count == 1) {
                let _init_node = new Node(arr[0], _initial_node);
                _initial_node = _init_node;
                node = _initial_node;
                for (let i = 1; i < arr.length; i++) {
                    let newNode = new Node(arr[i], node.next);
                    node.next = newNode;
                    node = newNode;
                    _length++;
                }
                return;
            }
            if (_length < index) {
                return "Index out of bounds";
            }

            while (count != _length+1) {
                if (count == index) {
                    for (let i = 0; i < arr.length; i++) {
                        let newNode = new Node(arr[i], node.next);
                        node.next = newNode;
                        node = newNode;
                        _length++;
                    }
                    return;
                }
                node = node.next;
                count++;
            }
        },
        removeAt: function (index) {
            if (index == 0) {
                if(_length == 1) {
                    _initial_node.value = null;
                    _initial_node.next = null;
                    return;
                }
                _initial_node = _initial_node.next;
                _length--;
                return;
            }

            let count = 1;
            let node = _initial_node;

            while (node != null && count != _length) {
                if (count == index) {
                    if (node.next != null) {
                        node.next = node.next ? node.next.next : null;
                        _length--;
                        return;
                    }
                }
                node = node.next;
                count++;
            }
        }
    }
}