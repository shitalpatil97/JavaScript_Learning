
console.log("Example of printing factorial of given number using while loop");

function factorialOfNum(num) {

    var factorial=1;
       // console.log(`Factorial of number ${num} is : ${factorial}`);


    while (num>=1) {
        factorial=factorial*num;
        num--;
    }

    console.log(`Factorial of given  is : ${factorial}`);

    
}
factorialOfNum(5);
factorialOfNum(6);

//WAP to print table of 5 using do while loop
console.log("table of 5 is ");
var num=5;
do {
    console.log(`${num}`);
    num=num+5;

    
} while (num<=50);

//WAP to reverse only first word of string

var str="Shital Patil";
var res="";
var str1=str.length-1;
for (let index = str1; index >=0; index--) {
    //str=str.charAt(index);
    res=res+str.charAt(index);
    
    
}
console.log(`Reversed string of given string "${str}" is ${res}`);
var str2=str.split(" ");
console.log(`${str} is splitted into words : ${str2}`);
var str3=str2[0];
console.log(`get the 1st word of splitted ${str2} is ${str3}`);
var res1="";
for (let index = str3.length; index>=0; index--) {
res1=res1+str3.charAt(index)
    
}
console.log(`Reverse of ${str3} is: ${res1}`);

var str4=res1+" "+str2[1];
console.log(`concatenation done on ${res1} and ${str2[1]} and the result is :${str4}`);

