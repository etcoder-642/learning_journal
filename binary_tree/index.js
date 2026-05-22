import { Tree } from "./binary_tree.js";

let arr = [4, 2, 6, 1, 3, 5, 7, 31, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 3, 5, 7, 3, 3];
let tree = new Tree(arr);

tree.prettyPrint(tree.root);

console.log("root data");
// console.log(tree.root);

console.log("root left");
// console.log(tree.root.left);

console.log("root right");
// console.log(tree.root.right);

