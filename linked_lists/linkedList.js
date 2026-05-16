import { Node } from './node.js';

export const createLinkedList = () => {
    let _initial_node = new Node(null, null);
    let _length = 0;
    return {
        append: function (value) {
            const newNode = new Node(value, null);
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
            while (node.next != null) {
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
            while (node.next != null) {
                if (node.value == value) return true;
                node = node.next;
            }
            return false;
        },
        findIndex: function (value) {
            let count = 0;
            let node = _initial_node;
            while (node.next != null) {
                if (node.value == value) return count;
                node = node.next;
                count++;
            }
            if (node.value == value) return count;
            return -1;
        },
        toString: function () {
            let str = "(";
            let node = _initial_node;
            while (node.next != null) {
                str += " " + node.value + ") -> (";
                node = node.next;
            }
            str += " " + node.value + ") -> ( )";
            return str;
        }
    }
}