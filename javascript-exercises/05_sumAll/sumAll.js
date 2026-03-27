const sumAll = function(str, end) {
    if(str>end){
        temp = end;
        end = str;
        str = temp;
    }
    ans = 0;
    for(i=0;i<=(end-str);i++){
        ans += str + i;
    }
    if(!(str>0 && end>0 && str%1==0 && end%1==0 && typeof str=="number" && typeof end=="number")) return "ERROR";
      else return ans;
};

// Do not edit below this line
module.exports = sumAll;
