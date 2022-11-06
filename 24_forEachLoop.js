const arrayNumbers=[10,20,30,40,20,10];
arrayNumbers.forEach(function(currentValue,index,array){
    console.log(currentValue,index,array);

});
arrayNumbers.forEach((currentValue)=>console.log(currentValue));

// person={
//     Name:"shital",
// }
// person.forEach((value)=>{
//     console.log(value)

console.log("=====Traversing set using forEach()=====");
const set=new Set(arrayNumbers);
set.forEach((value) =>{
    console.log(value);
});

console.log("===== Traversing map using forEach() =====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );

