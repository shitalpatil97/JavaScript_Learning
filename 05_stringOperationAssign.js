var str= function(arg1){
    var strLength=arg1.length;
    var str1=strLength*strLength
    console.log(`Length of ${arg1} is:${strLength} and square is :${str1}`);
    
}
str("JavaScript");
str("Google");
str("Developer");

function stringOperation() {
    var string1="I am angular developer";
    console.log(`Given String is ${string1}`);
    var stringLen=string1.length;
    console.log(`Total String Length is:${stringLen}`);
     var split1=string1.split(" ");
     //console.log(split1);
     var totalWords=split1.length;
     console.log(`Total Number of words in string is:${totalWords}`);
     var total=stringLen/totalWords;
     console.log(`Result after dividing length of string with total number of words in string:${total}`);

    return string1.split("").reverse().join("");
     

    
}
 var string2=console.log(`Reverse String is:${stringOperation()}`);
