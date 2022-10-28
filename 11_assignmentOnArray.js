const array_nums=[20,3,4,56,90,400,49];

console.log("Performing Shallow clone using assignment operator");

let array2=array_nums;

array2.push(55);
array2.push(66);
console.log(`Original array is: ${array_nums}`);
console.log(`Cloned array is :${array2}`);

console.log("------------------------------------------------------------------------------------------------");

console.log("Performing deep clone using Spread operator");

array2=[...array_nums];
array_nums.push(10);
array_nums.push(25);
console.log(`Update original array with values 10 & 25 is: ${array_nums}`);
console.log(`Cloned Array is :${array2}`);

console.log("------------------------------------------------------------------------------------------------");

let array_even=[2,30,14,8]

array_even=[...array_nums,...array_even];

console.log(`Merge array_num and array_even using spread operator : ${array_even}`);

console.log("------------------------------------------------------------------------------------------------");

const employee_info={
    emp_id:27,
    emp_name:"Shital Patil",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli, 431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88", "1800-4567 32", "+91-9096 5678 77"]

}
console.log("I am log in the employee address details");
console.table(employee_info.address);
console.log(`I am log in the employee contact details : ${employee_info.mobiles}`);

let object2={...employee_info};

console.table(employee_info);
console.table(object2);

console.log(employee_info.address.locality.street="Khau Galli");
console.table(employee_info.address);
console.log(employee_info.mobiles[0]="7004392694");
console.table(employee_info.mobiles);
// console.log("Original object is : ",employee_info);
// console.log("Cloned object is :", object2);
console.table(employee_info);
console.table(object2);

console.log("deep clone using JSON.stringfy()");

object2=JSON.parse(JSON.stringify(employee_info));
console.log(employee_info.salary.july_month="80000");
console.log(employee_info.address.country="United Kingdom");
console.table(employee_info);
console.table(object2);


