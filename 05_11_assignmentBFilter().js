const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given array ${arrayNumbers}`);
console.log("Array element which are greater than 50");
arrayNumbers.filter((value)=>{
    if (value>50) {
        console.log(value);
        
    }

});
console.log("-----------Even number from the given array----------");
arrayNumbers.filter((value)=>{
    if (value%2==0) {
        console.log(value);
        
    }

});
console.log("-----------Odd number from the given array----------");
arrayNumbers.filter((value)=>{
    if (value%2!=0) {
        console.log(value);
        
    }

});
console.log("-----------number which multiple of 5from the given array----------");
arrayNumbers.filter((value)=>{
    if (value%5==0) {
        console.log(value);
        
    }

});
console.log("-----------number between 20 to 50 from  the given array----------");
arrayNumbers.filter((value)=>{
    if (value>=25 && value<=50) {
        console.log(value);
        
    }

});