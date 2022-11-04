var arrayExp=[1,2,3,4,5,6,7,8,9];
console.log(typeof arrayExp);
var arrlen=arrayExp.length;
console.log(arrlen);
var arrayelment=arrayExp[0];
console.log(arrayelment);
var a=arrayExp[0]=4;
console.log(a);
console.log(arrayExp);
var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log(arrayOfNumbers);
 var arrayLength = arrayOfNumbers.length;

console.log(`Total number elements available in array: ${arrayLength}`);

console.log(`Element at 4th Index is: ${arrayOfNumbers[4]}`);

arrayOfNumbers[2] = 77;
console.log(arrayOfNumbers);

var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log(arrayOfNumbers.sort());
console.log("========== Resize array========");
console.log(arrayOfNumbers.length);
arrayOfNumbers.length = 3;
console.log(arrayOfNumbers.length);
console.log(arrayOfNumbers);
console.log("========== Resize array========");

console.log("Clearing array");
arrayOfNumbers.length=0;
console.log(arrayOfNumbers);