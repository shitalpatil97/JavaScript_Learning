
var str="Shital Patil";
var vowels=['a','e','i','o','u'];
var vowelcount=0;

for (const iterator of str) {

    if (vowels.includes(iterator)) {
        console.log(iterator);
        vowelcount++

    }
}
console.log(vowelcount);
var fact=5;
console.log("..........Factorial................");
for (let index = 4; index >=1; index--) {
    
    fact=fact*index;
}
console.log(fact);

function prime(num) {
    for (let index = 2; index <num; index++) {
        if (num%index==0) {

           return false
        }
    }
    return true;

}
console.log(prime(4));
console.log(prime(3));
console.log(".........Fibonacci series.........");

function fibonacci(params) {
    var n1=0,n2=1,nextTerm;
    for (let index = 1; index <=params; index++) {
        console.log(n1);
        nextTerm=n1+n2;
        n1=n2;
        n2=nextTerm;
        
    }
    
}
fibonacci(7)

console.log("Palindrome");

function palimdrome(params) {

    var str=params.toString();
    //console.log(typeof str);
    var strLen=str.length;
    var reverse="";
    for (let index = strLen-1; index>=0; index--) {
         reverse=reverse+str.charAt(index);
        console.log(reverse);
        var temp=+reverse;
        console.log(typeof temp);
        if (params==temp) {
            console.log("Palindrome");
            
        }
        else
        {
            console.log("Not palimdrome");
        }


        
    }

    
}
palimdrome(111);
console.log("............................................");
var str="shital Patil",count=0;
for (let index = 0; index < str.length; index++) {
    let char=str.charAt(index);
    if(char=="a")
    {
        count++;

    }

}
console.log(count);



function armStrong(params) {
    
    for (let index = 0; index <params; index++) {
        
    }
}
armStrong(123);


    
