//WAP to count total number of vowels
console.log("count of vowels using includes method");
var str="Good Morning IT Champ"
str=str.toLowerCase();
    var vowelCount=0;
    var vowels=['a','e','i','o','u'];
    for (let char of str) {
        if(vowels.includes(char)){
            vowelCount++;


        }
        
        
    }
    console.log(vowelCount);

    console.log("Count of vowel using function");

    //Write a function to count total number of vowels

    function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("I Love JavaScript"));

console.log("sum of number from 1 to 10 using function exp");
var sumNum=function(){
  var count=0;
  for (let index = 0; index <=10; index++) {
    count=count+index;
    
  }
  console.log(`Sum of number 1-10 is:${count}`);
}
sumNum();

console.log("WAP to get sum of square of 1-5 number");

function sumOfSquare(){
  var sum=0;
  for (let index = 1; index <=5; index++) {


    sum=sum+(index*index);
    
  }console.log(sum);
}
sumOfSquare();

function evenPositionChar(str) {
  for (let index = 0; index < str.length; index++) {
    var char=str.charAt(index);

    if(index %2==0 && char!=(" "))
    {
      console.log(char);
    } 
  } 
  }
  evenPositionChar("Hard Work Always Pays Back");
  console.log("..................................................................");
  evenPositionChar("Soon I will be Angular IT Champ");

  console.log("-------------------------------------------------------------------");

function oddPositionChar(str) {
  for (let index = 0; index < str.length; index++) {
    var char=str.charAt(index);

    if(index %2!=0 && char!=(" "))
    {
      console.log(char);
    } 
  } 
  }
  oddPositionChar("Hard Work Always Pays Back");
  console.log("..................................................................");

  oddPositionChar("Soon I will be Angular IT Champ")