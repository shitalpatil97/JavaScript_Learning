var reverseString=function(str) {
    
let lenStr = str.length - 1; // 
var reverseStr = "";
for (let index = lenStr; index >= 0; index--) {
    //console.log(myName.charAt(index));
    var char =str.charAt(index);
    if (char!=' ') {
        reverseStr = reverseStr + str.charAt(index)

        
    }
}
console.log(`"${str}" given string reversed with ignoring spaces is :${reverseStr}`);
    
}
reverseString("Hard work always pays back");
reverseString("Soon I will be IT angular Champ");

