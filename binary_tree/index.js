import { Tree } from "./binary_tree.js";

let arr = [4, 6, 1, 3, 5, 7, 39, 30, 28, 26];
let tree = new Tree(arr);

tree.prettyPrint(tree.root);


console.log("root data");
console.log(tree.root.data);

console.log("root left");
console.log(tree.root.left.data);

console.log("root right");
console.log(tree.root.right.left.data);

console.log("includes");
console.log((tree.includes(31)) ? "INCLUDES 31": "DOESN'T INCLUDE 31");
console.log((tree.includes(39)) ? "INCLUDES 39": "DOESN'T INCLUDE 39");

console.log("insert");
tree.insert(3);
tree.insert(0);
tree.insert(12);
tree.insert(19);
tree.insert(5);
tree.insert(-3);
tree.insert(23);
tree.insert(29);
tree.insert(43);
tree.insert(40);

tree.prettyPrint(tree.root);

console.log("delete");
tree.deleteItem(30);
// tree.deleteItem(12);
// tree.deleteItem(23);
tree.deleteItem(6);
tree.deleteItem(100);

tree.prettyPrint(tree.root);

function multiplyBy2(num){
    return num * 2;
}

tree.inOrderForEach(multiplyBy2, tree.root.left);
tree.prettyPrint(tree.root);
