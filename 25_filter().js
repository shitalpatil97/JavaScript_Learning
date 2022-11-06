const arrayNumbers=[2,3,4,5,6,1,"shital"];
let newArray=arrayNumbers.filter((element)=>{
    return element===Number;

});
console.log(newArray);