const getGuestLists = function(input) {
    if(input == []) return [];
    if(input.length == 1) return input;
    const subsetWithoutFirst = getGuestLists(input.slice(1));
}

module.exports = getGuestLists;