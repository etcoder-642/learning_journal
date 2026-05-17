import { Node } from './node.js';
import { createLinkedList } from './linkedList.js';

let linkedList = createLinkedList();

// 1. Initial State
console.log("--- Initial State ---");
console.log("Size:", linkedList.size()); // Should be 0
console.log("Head:", linkedList.head()); // Should be undefined

// 2. Prepend Test
console.log("\n--- Prepend Test ---");
linkedList.prepend("Node 1");
linkedList.prepend("Node 0");
console.log("List:", linkedList.toString()); 
// Expected: ( Node 0) -> ( Node 1) -> ( )

// 3. Append Test 
// (Caution: If your loop logic isn't fixed, this might throw an error)
console.log("\n--- Append Test ---");
try {
    linkedList.append("Node 2");
    console.log("List:", linkedList.toString());
} catch (e) {
    console.log("Append Crashed:", e.message);
}

// 4. Accessor Tests
console.log("\n--- Accessor Tests ---");
console.log("Size:", linkedList.size());       // Should be 3
console.log("Head:", linkedList.head());       // Node 0
console.log("Tail:", linkedList.tail());       // Node 2
console.log("At index 1:", linkedList.at(1));  // Node 1

// 5. Search Tests
console.log("\n--- Search Tests ---");
console.log("Contains 'Node 1':", linkedList.contains("Node 1")); // true
console.log("Contains 'Ghost':", linkedList.contains("Ghost"));   // false
console.log("Index of 'Node 2':", linkedList.findIndex("Node 2")); // 2

// 6. Pop Test
console.log("\n--- Pop Test ---");
linkedList.pop();
console.log("After Pop:", linkedList.toString());
console.log("New Tail:", linkedList.tail()); // Should be Node 1
// linkedList.append("Node 2");
// linkedList.append("Node 3");
// linkedList.append("Node 4");
// linkedList.append("Node 5");
console.log("BEFORE");
console.log(linkedList.toString());

linkedList.pop();
// linkedList.pop();
console.log("\n// linkedList.pop()");
console.log(linkedList.toString());

// console.log("INSERT AT Test");
// linkedList.insertAt(2, 10);
// console.log(linkedList.toString());


console.log("REMOVE AT Test");
linkedList.removeAt(0);
console.log(linkedList.toString());
