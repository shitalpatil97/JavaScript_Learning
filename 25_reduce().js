const arrayNumbers=[2,3,5,4,6,1];
let sum=arrayNumbers.reduce((value,runningTotal)=>{
    return value+runningTotal;
},50);
console.log(sum);