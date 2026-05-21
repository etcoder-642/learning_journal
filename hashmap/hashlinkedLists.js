import { Node } from './node.js'

export const createLinkedList = () => {
    let _initial_node = new Node(null, null, null);
    let _length = 0;
    return {
        getKeys: function () {
            let node = _initial_node;
            let arr = [];
            while (node != null) {
                arr.push(node.key);
                node = node.next;
            }
            return arr;
        },
        getValues: function () {
            let node = _initial_node;
            let arr = [];
            while (node != null) {
                arr.push(node.value);
                node = node.next;
            }
            return arr;
        },
        getEntries: function () {
            let node = _initial_node;
            let arr = [];
            while (node != null) {
                arr.push({
                    key: node.key,
                    value: node.value
                });
                node = node.next;
            }
            return arr;
        },
        getValue: function (key) {
            let node = _initial_node;
            while (node != null) {
                if (node.key == key) {
                    return node.value;
                }
                node = node.next;
            }
            return "";
        },
        append: function (key, value) {
            const newNode = new Node(key, value, null);

            let node = _initial_node;
            while (node != null) {
                if (node.key == key) {
                    node.key = key;
                    node.value = value;
                    return;
                }
                node = node.next;
            }

            if (_initial_node.key == null) {
                _initial_node.key = key;
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
        size: function () {
            return _length;
        },
        head: function () {
            return (_initial_node.key == null) ? undefined :
                {
                    key: _initial_node.key,
                    value: _initial_node.value
                };
        },
        tail: function () {
            let node = _initial_node;
            while (node.next != null) {
                node = node.next;
            }
            return {
                key: node.key,
                value: node.value
            };
        },
        at: function (index) {
            let count = 0;
            let node = _initial_node;
            while (node != null) {
                if (count == index) {
                    return {
                        key: node.key,
                        value: node.value
                    };
                }
                node = node.next;
                count++;
            }
            return undefined;
        },
        pop: function () {
            if (_initial_node.next == null) {
                _initial_node.key = null;
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
        contains: function (key) {
            let node = _initial_node;
            while (node != null) {
                if (node.key == key) return true;
                node = node.next;
            }
            return false;
        },
        containsValue: function (value) {
            let node = _initial_node;
            while (node != null) {
                if (node.value == value) return true;
                node = node.next;
            }
            return false;
        },
        findIndex: function (key) {
            let count = 0;
            let node = _initial_node;
            while (node != null) {
                if (node.key == key) return count;
                node = node.next;
                count++;
            }
            return -1;
        },
        toString: function () {
            let str = "(";
            let node = _initial_node;
            while (node.next != null) {
                str += " " + node.key + " : " + node.value + ") -> (";
                node = node.next;
            }
            if (node.value != null)
                str += " " + node.key + " : " + node.value + ") -> (";
            str += " )";
            return str;
        },
        remove: function (key) {
            if (_initial_node.key == null) return false;

            if (_initial_node.key == key) {
                if (_initial_node.next) {
                    _initial_node = _initial_node.next;
                } else {
                    _initial_node = new Node(null, null, null);
                }
                _length--;
                return true;
            }

            let node = _initial_node;
            while (node.next != null) {
                if (node.next.key == key) {
                    node.next = node.next.next;
                    _length--;
                    return true;
                }
                node = node.next;
            }
            return false;
        },
        clear: function () {
            _initial_node = new Node(null, null, null);
            _length = 0;
        }
    }
}
