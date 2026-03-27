const repeatString = function(string, num) {
    str = "";
    for(i=0;i<num;i++){
        str += string;
    }
    if(num>=0)return str;
      else return "ERROR" 
};

// Do not edit below this line
module.exports = repeatString;
