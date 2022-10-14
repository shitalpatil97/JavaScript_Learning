var res=0/0;
console.log(res);
console.log(typeof res);
var name1="Shital";
var age="24";
console.log(typeof name1);
console.log("..................");

console.log(typeof age);
console.log("..................");

var ageNum= new Number(age)//another way for converting datatype
console.log(typeof ageNum);
console.log("..................");
var s=+name1;//another way for converting datatype
console.log(s);
console.log(typeof s);
var num1=+200;
console.log(num1,typeof num1);

console.log("===== Implicit conversion======");
console.log("4"-true); // 4-1

var operand2 = 200;
console.log(operand2, typeof operand2);
var operand2Str =  operand2.toString();
console.log(operand2Str, typeof operand2Str);
