const palindromes = function (str) {
    let unSpaced = str
                      .replace(/ /g, "")
                      .toLowerCase();
    const regex = new RegExp(/[a-z0-9]/)
    let newStr = "";
    let revStr = "";
    for(i=0;i<unSpaced.length;i++){
        if(regex.test(unSpaced[i])) newStr += unSpaced[i]
           else continue; 
    }
    for(i=newStr.length-1;i>=0;i--){
        revStr += newStr[i]
    }
    return revStr === newStr;
};

// Do not edit below this line
module.exports = palindromes;
