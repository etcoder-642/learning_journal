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
        if (node == null || node == undefined) return false;
        if (node.data == value) return true;

        if (value > node.data) {
            return this.#_search(node.right, value);
        } else if (value < node.data) {
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

    #_deleteNode(node = this.#_root, value){
        if(node == null) return null;

        if(node.data == value){
            if(node.right){
                let sNode = node.right;
                while(sNode.left != null){
                    sNode = sNode.left;
                }
                node.data = sNode.data;
                node.right = this.#_deleteNode(node.right, sNode.data);
            }else {
                node = node.left;
            }
        }else if(node.data < value){
            node.right = this.#_deleteNode(node.right, value);
        }else if(node.data > value){
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

    // levelOrderForEach(callback) {

    // }

    inOrderForEach(callback = null, node = this.#_root) {
        if(node == null) return null;
        try{
            callback != null
        }catch {
            console.log("Callback not provided!");
            return undefined;
        }

        node.right = this.inOrderForEach(callback, node.right);
        
        node.data = callback(node.data);
        node.left = this.inOrderForEach(callback, node.left);

        return node;
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
