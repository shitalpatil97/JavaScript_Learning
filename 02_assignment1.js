function personalInfo(){
    console.log("My name is Shital Suresh Patil ");
    console.log("I am learning Java Script programming language under Mr.Gajanan Sir");
}
personalInfo();

function currentJobInfo(){
    console.log("I am working in Mediprobe Services Pune as a Sr.Claim Manager");

}
currentJobInfo();

function concatDemo(firstName,lastName){
    console.log(firstName + lastName);

}
concatDemo();

function swapDemo(value1, value2){
    console.log("Before swap");
    console.log(value1,value2);
    console.log("=========================");
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After swap");
    console.log(value1,value2);
}
swapDemo("Virat","Anushka");
console.log("=========================");
swapDemo(1000,2000);
console.log("=========================");

function add_three_number( value1 , value2 , value3 ){
    return( value1 + value2 + value3 );
    
}
console.log("Addition of three numbers");
var val=add_three_number(10.23 , 600, 40);
console.log(val);
var val1=add_three_number("Shital", "Suresh", "Patil");
console.log(val1);