const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`Given array is ${arrayNumbers}`);
console.log("..............adding 10 into each array element..........");
let array=arrayNumbers.map((element)=>{
    return element+10;

});
console.log(array);
console.log("..............square of an array element..........");
var array1=arrayNumbers.map((element)=>{
    return element * element;

});
console.log(array1);


console.log("..............adding index value into corresponding array element array element..........");
var array1=arrayNumbers.map((element,index)=>{
    return element + index;

});
console.log(array1);