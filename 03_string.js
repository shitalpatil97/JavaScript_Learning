var str="Good Morning";
var str1="Shital";
console.log(str.length);
console.log(str.charAt(1));
console.log(str.concat(str1));
console.log(str.indexOf('Mor'))
console.log(str.replace("Morning","Afternoon"));
console.log(str.toUpperCase());
console.log("==============trim()===============");
var greet = "    Good Morning bro and sis            ";
console.log(greet.length);
var trimResult =  greet.trim();
console.log(trimResult.length);
console.log(greet.includes("bro"));
console.log(str.substring(5,7));
console.log(str.slice(5));
console.log("==============split()===============");
var studentList  = "Sunil | Anil| Andy| Jenny| Lata";
var splitResult = studentList.split("|");
console.log(splitResult);
var impQuote = `"Do or Die" this attitude is important for this training`;
console.log(impQuote);


var fName = "Virat";
var lName = "Kohli";

// First Name:${fName}  Last Name: ${lName} 
console.log(`First Name : ${fName} and Last Name: ${lName}`);

var res = "Hey you are doing good keep it up";
var stepSplit =  res.split(" ");
console.log(stepSplit);
console.log(stepSplit.length);

