var a=function(arg){
    var b=arg.length;
    return b*b;
}
var res=a("Shital");
console.log(res);

var str=" I am a developer";
var strLen=str.length;
for (let index =strLen-1; index >=0; index--) {
    var a= str.charAt(index);
    console.log(a);
    
}
console.log("............................................................");
var strLen= "I am shital shital Pati";
console.log(strLen.charCodeAt(0));
console.log(strLen.match(/shital/g));
console.log(strLen.search('I'));
console.log(strLen.substr(2,4));
var strlength =strLen.length;
var str1=strLen.split(" ");
var str2= str1.length;
var str4=strlength/str2;
console.log(str4);
console.log("................................................................");

var greatestNum=function(arg1,arg2,arg3){
    var res=(arg1>arg2 && arg1>arg3)?`${arg1} is greater`:(arg2>arg1 && arg2>arg3)?`${arg2} is greater`:`${arg3} is greater`;
    console.log(res);
}
greatestNum(10,20,0);

var s="123";
console.log(typeof s);
var b=+s;
console.log(typeof b);
console.log(`${s}${b}`);

