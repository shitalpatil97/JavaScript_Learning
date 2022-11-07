class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
array=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log("--------------------Employee details who is working in Wipro-------------------------");

var array1=array.filter((person)=>{
    if (person.emp_company=='Wipro') {
        console.log(`Employee ID: ${person.emp_id}  Employee Name : ${person.emp_name}  Employee Dept: ${person.emp_dept} Employee Salary :${person.emp_salary} Employee Company : ${person.emp_company}`);
        
    }


});
console.log("--------------------Employee details who is from IT or HR dept-------------------------");
var array1=array.filter((person)=>{
    if (person.emp_dept=='IT' || person.emp_dept=='HR') {
        console.log(`Employee ID: ${person.emp_id}  Employee Name : ${person.emp_name}  Employee Dept: ${person.emp_dept} Employee Salary :${person.emp_salary} Employee Company : ${person.emp_company}`);
        
    }


});

console.log("--------------------Employee details whose id is greater than 50-------------------------");
var array1=array.filter((person)=>{
    if (person.emp_id>50) {
        console.log(`Employee ID: ${person.emp_id}  Employee Name : ${person.emp_name}  Employee Dept: ${person.emp_dept} Employee Salary :${person.emp_salary} Employee Company : ${person.emp_company}`);
        
    }


});
console.log("--------------------Employee details whose name starts with 'A','V','M'-------------------------");
var array1=array.filter((person)=>{
    if (person.emp_name.startsWith("A") || person.emp_name.startsWith("V") || person.emp_name.startsWith("M")) {
        console.log(`Employee ID: ${person.emp_id}  Employee Name : ${person.emp_name}  Employee Dept: ${person.emp_dept} Employee Salary :${person.emp_salary} Employee Company : ${person.emp_company}`);
        
    }


});
console.log("--------------------Average Salary of the Employee -------------------------");
var sum=0;
var array1=array.filter((value)=>{
    sum=sum+value.emp_salary;


});
console.log(sum/array.length);
console.log("--------------------Average Salary of the Employee who is working in IT dept-------------------------");
var array1=array.filter((value)=>{
    return value.emp_dept==='IT';

});
console.log(array1);
var array2=array1.forEach((value1)=>{
    console.log(value1.emp_salary);
        //return (value1.emp_salary);

});
console.log(array2);

