const reverse = function(str) {
    if(str.length == 0) return "";
    if(str.length == 1) return str;
    let newStr = "";
    for(let i = 0; i < str.length-1; i++){
        newStr += str[i];
    }
    return str[str.length-1] + reverse(newStr);
}


console.log("Debugging..");
console.log(reverse("firs"));

module.exports = reverse;