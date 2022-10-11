var str="    Hey you are doing good keep it up    ";
var stringHandsOn=function(){
    console.log(`Given String is :${str}`);
    var str1=str.length;
    console.log(`Length of the given string is:${str1}`);
    var str2 =str.trim()
    console.log(`Removed leading and trailing extra spaces is :${str1}`);
    var str3= str2.length;
    var str4= str1-str3;
    console.log(`Total number extra spaces count that is removed by using trim property is:${str4}`);
    var str5=str2.charAt(0);
    var str6=str2.charAt(32);
    console.log(`First and last character of the string after trim is:${str5},${str6}`);
    var str7=str2.split(" ");
    str7=str7.length;
    console.log(`Total number of words in string is:${str7}`);
    console.log(`Index of word "good" is:${str2.indexOf('good')}`);
    console.log(`Substring starting from index 22 is:${str2.substring(22)}`);
    console.log(`String ends with word "up" is:${str2.endsWith('up')}`);
    console.log(`String starts with word "Hey" is:${str2.endsWith('Hey')}`);


    


}
stringHandsOn();