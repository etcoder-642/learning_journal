// [1, 2, 3]
//[1, [2, 3], 4]

const flatten = function(data) {
    let collection = [];
    if(Array.isArray(data)){
        for(let i = 0; i < data.length; i++){
            collection.push(... flatten(data[i]));
        }
    }else{
        collection.push(data);
    }
    return collection;
};

module.exports = flatten;