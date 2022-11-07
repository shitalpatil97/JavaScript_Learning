const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`Given array ${array_roll_numbers}`);
console.log(`Reverse the array ${array_roll_numbers.reverse()}`);
console.log(`sort() method as it is without any custom sorting logic  ${array_roll_numbers.sort()}`);
var array1=array_roll_numbers.sort((a,b)=>{
    return a>b? 1:-1;

});
console.log(`Sorted array in ascending order is  [${array1}]`);

var array=array_roll_numbers.sort((a,b)=>{
    return a>b? -1:1;

});
console.log(`Sorted array in descending order is  [${array}]`);
console.log(`Greatest number of the array is :${array[0]}`);
console.log(`Smallest number of array is : ${array[9]}`);
var set=[...new Set(array_roll_numbers)];
console.log(`Array after removing duplicate elements ${set}`);



