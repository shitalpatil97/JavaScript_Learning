const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Given array is ${arrayNumbers}`);
arrayNumbers.forEach((value,index)=>{
    console.log(`Array Index is : ${index}  value is : ${value}`);

});
console.log("................Displaying Positive Number from the given array...........");
arrayNumbers.forEach((value)=>{
    if (value>0) {
        console.log(value);
        
    }

});
console.log("--------------------Negative number from the given array..............");
arrayNumbers.forEach((value)=>{
    if (value<0) {
        console.log (`${value}`);
        
    }

});
console.log("-------------sum of array element");
var sum=0;
var array1=arrayNumbers.forEach((value)=>{
    sum=sum+value;

});
console.log(sum);
console.log("---------Even Positioned array value-----------");
arrayNumbers.forEach((value,index)=>{
    if (index%2==0) {
        console.log(value);
        
    }

});
console.log("---------odd Positioned array value-----------");
arrayNumbers.forEach((value,index)=>{
    if (index%2!=0) {
        console.log(value);
        
    }

});

