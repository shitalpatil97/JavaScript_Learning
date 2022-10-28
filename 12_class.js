class Person{
    fullName;

    constructor(myname,mycity,myage,mygender){
        this.fullName=myname;
        this.City=mycity;
        this.age=myage;
        this.gender=mygender;


    }
    details(){
        console.log(`Person Details: ${this.fullName}  ${this.City}  ${this.age}  ${this.gender}`);
    }

  
}
let Shital= new Person("Shital Suresh Patil","Pune",45,"female");
console.log(Shital);
console.log(Shital instanceof Person);
console.log(Shital.fullName);
// console.log(Shital.state="MH");
Shital.details();