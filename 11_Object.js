let objectShital={
    fullName:"Shital Suresh Patil",
    age:24,
    ismarried:true,
    address:{
        street:"KP Mall",
        City:"Pune",
        Pincode:123456,
        State:"MH"

    },
    eat:function()
    {
        console.log("I am non-vegetarian");
    },
    details:function()
    {
        console.log(`The details are:${this.fullName} ${this.address.City} ${this.ismarried}`);
    }
}
let res="age" in objectShital;
console.log(res);
res="State" in objectShital.address;
console.log(res);
objectShital.details();
console.log("...................................................................................");
console.log(Object.entries(objectShital));
console.log(Object.keys(objectShital));
console.log(Object.values(objectShital));
console.log("...................................................................................");

objectShital.eat();
//console.log(objectShital.eat());
console.log(objectShital);
console.log(objectShital.fullName);
console.log(objectShital["age"]);
objectShital.profession="Engineer";
console.log(objectShital);
console.table(objectShital);
console.log(objectShital.fullName="Radha");
console.table(objectShital);
delete objectShital.age;
console.table(objectShital);
console.log(objectShital.address.City);
console.log(objectShital.address.landmark="Hadpsar road");
console.table(objectShital);

let college={

}
console.log(college);