let setOfNumbers = new Set();
console.log(typeof setOfNumbers);
console.log("====== Adding element into the set collection=======");
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);
setOfNumbers.add(14);
var set1=[...setOfNumbers];
console.log(set1[4]);
console.log(".........................");
console.log(setOfNumbers);
console.log("====== Adding duplicate element =======");
setOfNumbers.add(7);
console.log(setOfNumbers);
setOfNumbers.delete(14);
console.log(setOfNumbers);
console.log(setOfNumbers.size);
console.log(setOfNumbers.has(9));
console.log(".....................................");
var it=setOfNumbers.values();
console.log(it);
var first=it.next();
console.log(first);
console.log(first.value);
// console.log(setOfNumbers.clear());
console.log(setOfNumbers);

for (const iterator of setOfNumbers) {
    console.log(iterator);
    
}

let arrayNumbers=[2,3,4,5,6,3,5];
let uniqueArrayElements=[...new Set(arrayNumbers)];
console.log(uniqueArrayElements);






