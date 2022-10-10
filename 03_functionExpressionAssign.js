var square1=function(arg1){
    console.log("Square of the number 5 is:",arg1*arg1);
}
square1(5);
var square2=function(arg1){
    console.log("Square of the number 6 is:",arg1*arg1);
}

square2(6);
var square3=function(arg1){
    console.log("Square of the number 25 is:",arg1*arg1);
}
square3(25);

var square4=function(arg1){
    console.log("Square of the number 5 is:",arg1*arg1);
}
square4(100);
console.log("...........................................................................................");
var exp1= function() {
    
}
console.log("Type of function is :",typeof exp1);
console.log("...........................................................................................");
var triangle=function(arg1,arg2){
    console.log("Area of triangle for considering  base=45 & height=34:",(arg1*arg2)/2);
}
triangle(45,34);
console.log("............................................................................................");
var rectangle=function(arg1,arg2){
    console.log("Area of rectangle for considering length=499 and width=917 is =",(arg1*arg2));
} 
rectangle(499,917);
console.log("...........................................................................................");
console.log("Example of swapping using function expression:");
var swap_values=function(arg1,arg2){
    console.log("Value before Swap");
    console.log(arg1,arg2);
    console.log("Value after Swap");
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2);
}
swap_values("Virat","Anushka");
swap_values(1000,2000);
console.log("...........................................................................................");
console.log("String operations:");
var str="JavaScript the most popular language";
console.log(str);
console.log("Total number of character available in the string",str.length);
console.log("Index of S:",str.indexOf('S'));
console.log("Index of lang",str.indexOf('lang'));
var str1= str.charAt(str.length-1);
console.log("Last Character in the string is:",str1);
 var str2=str.charAt(str.length-3);
 console.log("3rd last character in the string is:",str2);


