let bank_SBI={
    bank_name:"State Bank Of India",
    bank_branch:"Sangola",
    branch_code:123456,
    IFSC_code:"SBI0000123"
}

let bank_location={
    street:"Shivaji Chouk",
    city:"Sangola",
    pin_code:412345
}
console.log("Bank SBI object details are");
console.table(bank_SBI);
console.log("*************************************************************************************************");
console.log("Bank location object details are");
console.table(bank_location);
console.log("*************************************************************************************************");

console.log("cloning using assign method of Object class ");
let object=Object.assign({},bank_SBI,bank_location);
console.table(object);
console.log(`bank_SBI and bank_location cloned into new one object i.e object :${object.bank_name}, Bank branch : ${object.bank_branch}, Branch code : ${object.branch_code} and IFSC code : ${object.IFSC_code}, street: ${object.street}, city: ${object.city} , Pin_code: ${object.pin_code}`);
console.log("*************************************************************************************************");
console.log("cloning using (...spread) operator");
let object1={...bank_SBI,...bank_location};
console.table(object1);

const rate_of_interest={
    home_loan_interest:"7 % package.p.a",
    personal_loan_interest:"13 % p.a",
    due_interest:"2 % p.a"
}
console.log("********Merge bank_SBI,bank_location and rate_of_interest into new one object that is bank_details*******");

let SBI_details=Object.assign({},bank_SBI,bank_location,rate_of_interest);
console.table(SBI_details);

let array=[bank_SBI,bank_location,rate_of_interest];

console.log("traversing SBI_details using for of loop");
for (const iterator of array) {
    console.log(iterator);
}



