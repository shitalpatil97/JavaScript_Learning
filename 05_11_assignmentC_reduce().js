const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given array ${arrayNumbers}`);
console.log("----------sum of all even number ...........");
var array=arrayNumbers.filter((value)=>{
    if (value%2==0) {
        return value;
    }

});
//console.log(array);
var array=array.reduce((a,b)=>{
    return a+b;

});
console.log(array);