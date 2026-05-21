import { HashMap } from './hashmap.js';

const myMap = new HashMap(8); // Start small to trigger resize faster

console.log("--- 1. INITIAL STATE ---");
console.log("Capacity:", myMap.capacity);
console.log("Length:", myMap.length());

console.log("\n--- 2. BASIC SET/GET ---");
myMap.set("sky", "blue");
myMap.set("grass", "green");
myMap.set("fire", "hot");
console.log("Get 'sky':", myMap.get("sky")); // blue
console.log("Length:", myMap.length()); // 3

console.log("\n--- 3. UPDATE TEST (UPSERT) ---");
myMap.set("sky", "dark blue");
console.log("Get 'sky' updated:", myMap.get("sky")); // dark blue
console.log("Length (should still be 3):", myMap.length());

console.log("\n--- 4. COLLISION TEST ---");
// Manually finding keys that might collide or just filling it up
// Since capacity is 8, these will eventually share buckets
myMap.set("rain", "wet");3
myMap.set("snow", "cold");
myMap.set("sun", "bright");
console.log("Contains 'snow'?:", myMap.has("snow")); // true
console.log("Contains 'ghost'?:", myMap.has("ghost")); // false

console.log("\n--- 5. RESIZE TRIGGER TEST ---");
console.log("Current Capacity:", myMap.capacity); // 8
console.log("Current Length:", myMap.length());   // 6
// Load factor 0.75 of 8 is 6. The next set() should trigger a resize to 16.
myMap.set("ocean", "deep"); 

console.log("New Capacity after 'ocean':", myMap.capacity); // Should be 16
console.log("Length:", myMap.length()); // 7
console.log("Retrieve after resize ('sky'):", myMap.get("sky")); // Should still be 'dark blue'

console.log("\n--- 6. REMOVE TEST ---");
console.log("Remove 'fire':", myMap.remove("fire")); // true
console.log("Length after remove:", myMap.length()); // 6
console.log("Get 'fire' (should be null):", myMap.get("fire"));

console.log("\n--- 7. BULK EXPORT ---");
console.log("Keys:", myMap.keys());
console.log("Values:", myMap.values());
console.log("Entries:", JSON.stringify(myMap.entries()));

console.log("\n--- 8. CLEAR ---");
myMap.clear();
console.log("Length after clear:", myMap.length());
console.log("Get 'sky':", myMap.get("sky")); // null