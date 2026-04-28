const getGuestLists = function(friends) {
  // 1. BASE CASE
  // If there are no friends left, there is exactly one possible 
  // guest list: the empty list [].
  if (friends.length === 0) {
    return [[]];
  }

  // 2. THE RECURSIVE LEAP
  // Get all possible guest lists for "the rest" of the people.
  // We assume this works perfectly and returns an array of arrays.
  const firstFriend = friends[0];
  const subsetsWithoutFirst = getGuestLists(friends.slice(1));

  // 3. THE "TWO UNIVERSES" STRATEGY
  // Universe A: The guest lists where the first friend IS NOT invited.
  // (This is already what subsetsWithoutFirst is!)

  // Universe B: The guest lists where the first friend IS invited.
  // We take every list from "Universe A" and add the first friend to it.
  const subsetsWithFirst = subsetsWithoutFirst.map(subset => {
    return [firstFriend, ...subset];
  });

  // 4. THE COMBINATION
  // The final answer is simply both universes joined together.
  return [...subsetsWithoutFirst, ...subsetsWithFirst];
};

console.log(getGuestLists(['A', 'B', 'C']))

module.exports = getGuestLists;