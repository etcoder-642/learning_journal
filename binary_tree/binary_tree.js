import { Node } from "./node.js";

export class Tree {
    #_root;

    constructor(arr) {
        this.#_root = this.#_buildTree(arr);
    }

    get root(){
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

    prettyPrint (node, prefix = '', isLeft = true) {
        if (node === null || node === undefined) {
            return;
        }

        this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}
