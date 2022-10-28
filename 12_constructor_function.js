function Person(fullName, city, age, gender) {
    this.fullName = fullName;
    this.city = city;
    this.age = age;
    this.gender = gender;
}
Person.prototype.country = "India";
let tend = new Person("Sachin Tendulkar", "Pune", 45, "Male");
console.log(tend);

let sharma = new Person("Rohit Sharma", "Pune", 32, "Male");
let shital=sharma;
console.log(shital);
console.log("...................");
console.log(sharma);
console.log(sharma.country);
