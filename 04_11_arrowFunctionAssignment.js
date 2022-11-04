var s=()=>{
    console.log("4 th November assignment of Shital Patil");
}
s();

console.log("**********Arrow Function with no arguments and no return value***********");

var display=()=>{
    console.log("Good Morning, Today is friday");

}
display();


console.log("**********Arrow Function with three arguments and no return value***********");

var multiplication=(a,b,c=2)=>{
    var d=a*b*c;
    console.log(`Multiplication of ${a}, ${b} and ${c} =${d}`);

}
multiplication(2,3,4);
multiplication(2,3);

console.log("********Arrow function with five arguments and return function ***********");
var addition=(a,b,c,d,e)=>{
    return a+b+c+d+e;
}
var result=addition(100,100,200,349,756);
var res=addition("I am", " " +"learning"," " + "ES6" ," " +"Features", " " + "In depth");
//console.log(res);
console.log(`Addition of number 100,100,200,349,756 is : ${result} and   ${res}`);
