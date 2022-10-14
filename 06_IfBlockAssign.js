console.log("--------------Check given number is Even or Odd-------------");
var findNumEO= function(num){
    if(num%2==0)
    {
        console.log(`${num} this number is Even number`);
    }
    else
    {
        console.log(`${num} this number is Odd number`);


    }


}
findNumEO(45);
findNumEO(70);
findNumEO(67);
findNumEO(98);

console.log("--------------Check you are Eligible for voting or not-------------");
var VotingEligibility=function(personName,age){
    if(age>=18)
    {
        console.log(`Hey ${personName} you are eligible for voting`);
    }
    else
    console.log(`Hey ${personName} you are not eligible for voting`);

}
VotingEligibility("Shital",18);
VotingEligibility("Supriya",16);
console.log("------Check string contains more than 10 character--------");

var str="Javascript-ES6";
var strlen=str.length;
if(strlen>10)
{
    console.log(`${str} this string contains more than 10 character`);

}
console.log("---------------------------------------");
var str="JavaScript Language";
if(str.startsWith("Java"))
{
    console.log("String stars with java");
}


