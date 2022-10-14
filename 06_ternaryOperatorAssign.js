
console.log("----------------Condition checkedTernary Operator-------------------------");

function maleMarriageEligibility(gender,age,boyName){
    var result=(gender=="Male" && age>=21)?`Hey ${boyName} you are eligible for Marriage`:`Hey ${boyName} you are not eligible for Marriage`;
    console.log(result);
}
maleMarriageEligibility("Male",25,"Smith");
maleMarriageEligibility("Male",17,"Deepak");

console.log("----------------Condition checked If-else block----------------------");

var femaleMarriageEligibility=function(gender,age,girlName){
 if(gender=="Female" && age>=18)
 {
    console.log(`Hey ${girlName} you are eligible for Marriage`);


 }
else
{
    console.log(`Hey ${girlName} you are not eligible for Marriage`);

}
  

}
femaleMarriageEligibility("Female",16,"Shital");
femaleMarriageEligibility("Female",27,"Supriya");



