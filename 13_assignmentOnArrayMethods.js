const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
console.log(`First Element of the array is: ${fruits_seasonal[0]} and the last element is ${fruits_seasonal[4]}`);
console.log(`I am adding the "Papaya" before the "Banana" ${fruits_seasonal.unshift("Papaya")}`);
console.log(fruits_seasonal);
console.log(`Removing "Mango" from the array ${fruits_seasonal.splice(4,1)}`);//elements removed from 4th index and only one elements removed.
console.log(fruits_seasonal);
console.log(`element "Pineapple" is added at last index of the array ${fruits_seasonal.push("Pineapple")}`);
console.log(fruits_seasonal);
console.log(`Insert "Dragon fruit" before "water melon" ${fruits_seasonal.splice(4,0,"Dragon fruit")}`);
console.log(fruits_seasonal);
console.log(`Replacing "Orange" with Kiwi `);
let array=fruits_seasonal.splice(2,1,"Kiwi")
console.log(fruits_seasonal);

console.log(`logging the elements starting from index 1 to 4 is ${fruits_seasonal.slice(1,5)}`);
console.log(`"Print last 3 elements of an array using length property is "${fruits_seasonal.slice(fruits_seasonal.length-3)}`);
// array=fruits_seasonal.slice(fruits_seasonal.length-3)
// console.log(array);
