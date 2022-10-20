let teacher={

};
console.log("I am printing empty object",teacher);

console.log("...................................");
let Teacher={
    Teacher_Name:"Rajendra Shivaji Navale",
    Age:34,
    Specialization:"C#.Net",
    Designation:"Assistant Professor",
    Total_Years_Of_Experience:9,
    degrees:{
        Master_In:"Software Testing",
        Engineering:"CSE",
        PHD:"Advance Computing",
    },
    certificates:{
        certificate_1:"Hacker Rank Participation",
        certificate_2:"Certificate in Advance Programming",
        certificate_3:"Certificate in Machine Learning",
        certificate_4:"Best Teacher"
    },
    details:function()
    {
        //console.log();
        return ` ${Teacher.degrees.Master_In}, ${Teacher.degrees.Engineering} and  ${Teacher.degrees.PHD}`;
    }
}
console.log(Object.entries(Teacher));
console.table(Teacher);
console.log(".....................................................................................................");

console.log(` Degrees of teacher ${Teacher.Teacher_Name} are:`,Teacher.degrees);
console.log(".....................................................................................................");
console.log(`Certificates of teacher ${Teacher.Teacher_Name} is:`,Teacher.certificates);
console.log(Teacher.certificates);
console.log(".....................................................................................................");
let result=Teacher.details();
console.log(` Teacher ${Teacher.Teacher_Name} has degrees as follows :${result}`);
console.log(".....................................................................................................");
console.log("Total degrees",Object.values(Teacher.degrees));
console.log(".....................................................................................................");

console.log("Adding New Property in Teacher Object");
console.log(Teacher.City="Sangola");

console.table(Teacher);

 console.log("Modified the property Master_In from degree object",Teacher.degrees.Master_In="Data Base");
 console.table(Teacher.degrees);
 console.log("Deleting certificate 4 from nested object certificates:", delete Teacher.certificates.certificate_4 );
 console.table(Teacher.certificates);
console.log("Adding new certificates in nested object certificates: ");
console.log(Teacher.certificates.certificate_4="All Rounder Teacher");
console.table(Teacher.certificates);

