var arrayLargest=[2,3,67,23,46,98];
var largest=arrayLargest[0];
for (let index = 0; index < arrayLargest.length; index++) {
    if (largest<arrayLargest[index]) {
        largest=arrayLargest[index];
        //largest=arrayLargest[index-1];
        
    }
    
}
console.log(largest);

const array = [32, 523, 5632, 920, 6000];

var largestVal=array[0];
var secondLargest=0;
for (let index = 0; index < array.length; index++) {
    if (largestVal<array[index]) {
        secondLargest=largestVal;
        largestVal=array[index];
    }
    else if(array[index]!=largestVal && secondLargest<array[index])
    {
        secondLargest=array[index];
    }
    
}
console.log(secondLargest);


