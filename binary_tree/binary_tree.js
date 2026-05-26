import { Node } from "./node.js";

export class Tree {
    #_root;

    constructor(arr) {
        this.#_root = this.#_buildTree(arr);
    }

    get root() {
        return this.#_root;
    }

    set root(value) {
        this.#_root = value;
    }

    #_mergeSort(arr) {
        if (arr.length <= 1) return arr;

        let mid = Math.floor(arr.length / 2);

        let u1 = arr.slice(0, mid);
        let u2 = arr.slice(mid);
        let fsorted = []; // This will hold our final merged and sorted result.

        if (u1.length > 1) {
            u1 = this.#_mergeSort(u1);
        }
        if (u2.length > 1) {
            u2 = this.#_mergeSort(u2);
        }

        let n = u1.length + u2.length;
        for (let i = 0; i < n; i++) {

            if (u1.length == 0) u1.push(Infinity);
            if (u2.length == 0) u2.push(Infinity);

            if (u1[0] > u2[0]) {
                fsorted.push(u2[0]);
                u2 = u2.slice(1);
            } else {
                fsorted.push(u1[0]);
                u1 = u1.slice(1);
            }
        }

        return fsorted;
    }

    #_sortedArrayToBSTRecur(arr, start, end) {
        if (start > end) return null;

        let mid = start + Math.floor((end - start) / 2);
        let root = new Node(arr[mid]);
        root.data = arr[mid];

        // Divide from middle element
        root.left = this.#_sortedArrayToBSTRecur(arr, start, mid - 1);
        root.right = this.#_sortedArrayToBSTRecur(arr, mid + 1, end);

        return root;
    }

    #_sortedArrayToBST(arr) {
        return this.#_sortedArrayToBSTRecur(arr, 0, arr.length - 1);
    }

    #_buildTree(arr) {
        // remove duplicates
        let _arr = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < _arr.length; j++) {
                if (_arr[j] == arr[i])
                    arr[i] = null;
            }
            (arr[i] !== null) && _arr.push(arr[i]);
        }

        // sort the arrays using mergeSort algorithm
        let _sarr = this.#_mergeSort(_arr);

        return this.#_sortedArrayToBST(_sarr);
    }

    #_search(node, value) {
        if (node == null || node == undefined) return undefined;
        if (node.data == value) return node;

        if (value > node.data) {
            return this.#_search(node.right, value);
        } else {
            return this.#_search(node.left, value);
        }
    }


    #_insert(node, value) {
        let _new_node = new Node(value);
        if (value > node.data) {
            if (node.right == null)
                node.right = _new_node;
            else
                this.#_insert(node.right, value);
        } else if (value < node.data) {
            if (node.left == null)
                node.left = _new_node;
            else
                this.#_insert(node.left, value);
        } else {
            return null;
        }
        return;
    }

    #_deleteNode(node = this.#_root, value) {
        if (node == null) return null;

        if (node.data == value) {
            if (node.right) {
                let sNode = node.right;
                while (sNode.left != null) {
                    sNode = sNode.left;
                }
                node.data = sNode.data;
                node.right = this.#_deleteNode(node.right, sNode.data);
            } else {
                node = node.left;
            }
        } else if (node.data < value) {
            node.right = this.#_deleteNode(node.right, value);
        } else if (node.data > value) {
            node.left = this.#_deleteNode(node.left, value);
        }
        return node;
    }

    includes(value) {
        return this.#_search(this.#_root, value);
    }

    insert(value) {
        this.#_insert(this.#_root, value);
    }

    deleteItem(value) {
        if (!this.#_search(this.#_root, value)) return;

        this.#_root = this.#_deleteNode(this.#_root, value);
    }

    levelOrderForEach(callback = null, node = this.#_root) {
        if (typeof callback != 'function') {
            throw new TypeError("Callback not provided or is not a function!");
        }

        let queue = [];
        queue.push(node);
        while (queue.length > 0) {
            let current = queue.shift();
            if (current != null) {
                current.data = callback(current.data);
                if (current.left != null)
                    queue.push(current.left);

                if (current.right != null)
                    queue.push(current.right);
            }
        }

    }

    levelOrderForEachRecur(callback = null, node = this.#_root, queue = null) {
        if (node == null) return null;
        if (queue == null) {
            queue = [node];
        }
        if (queue.length == 0) return null;
        let current = queue.shift();
        if (current == null) return null;

        current.data = callback(current.data);
        if (current.left != null)
            queue.push(current.left);

        if (current.right != null)
            queue.push(current.right);

        this.levelOrderForEachRecur(callback, node, queue);
    }

    inOrderForEach(callback = null, node = this.#_root) {
        if (typeof callback != 'function') {
            throw new TypeError("Callback not provided or is not a function!");
        }

        if (node == null) return null;
        node.right = this.inOrderForEach(callback, node.right);
        node.data = callback(node.data);
        node.left = this.inOrderForEach(callback, node.left);

        return node;
    }

    preOrderForEach(callback = null, node = this.#_root) {
        if (typeof callback != 'function') {
            throw new TypeError("Callback not provided or is not a function!");
        }

        if (node == null) return null;

        node.data = callback(node.data);
        node.right = this.preOrderForEach(callback, node.right);
        node.left = this.preOrderForEach(callback, node.left);

        return node;
    }

    postOrderForEach(callback = null, node = this.#_root) {
        if (typeof callback != 'function') {
            throw new TypeError("Callback not provided or is not a function!");
        }

        if (node == null) return null;
        node.right = this.postOrderForEach(callback, node.right);
        node.left = this.postOrderForEach(callback, node.left);
        node.data = callback(node.data);

        return node;
    }

    #_height(node = this.#_root) {
        if (node == null) return -1;

        let lh = this.#_height(node.left);
        let rh = this.#_height(node.right);
        return Math.max(lh, rh) + 1;
    }

    height(value) {
        let node = this.#_search(this.#_root, value);
        if (node){
            return this.#_height(node);
        }
        else
            return undefined;
    }

    depth(value, node = undefined) {
        if (node == undefined) node = this.#_root;
        console.log("Here I am!");



        let n = node;
        let depth = 0;

        while(n != null){
            if(value == n.data){
                return depth;
            }

            if(value > n.data){
                n = n.right;
            }else if(value < n.data){
                n = n.left;
            }

            if(n != null){
                depth++;
            }
        }
        return undefined;
    }

    prettyPrint(node, prefix = '', isLeft = true) {
        if (node === null || node === undefined) {
            return;
        }

        this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}
