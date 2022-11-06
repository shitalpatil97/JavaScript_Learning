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
var map_Person=new Map();
map_Person.set(22,emp_anil);
map_Person.set(33,emp_radha);
map_Person.set(55,emp_rishi);
map_Person.set(66,emp_sonali);
map_Person.set(77,emp_monika);
map_Person.set(88,emp_viny);
map_Person.set(99,emp_mahi);
console.log("---------------traverse the map and log the employee details------------");
map_Person.forEach((element)=>{
    console.log(`Employee ID :${element.emp_id}  Employee Name: ${element.emp_name} Employee Dept: ${element.emp_dept} Salary: ${element.emp_salary}  Company: ${element.emp_company}` );

})

