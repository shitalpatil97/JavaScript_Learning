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
console.log('*************** TCS working employee details***********');
array.forEach(element => {
    if(element.emp_company=="TCS"){
        console.log(`Employee Name: ${element.emp_name} Company Name : ${element.emp_company}`);
    }
});
console.log("-------------Employee details whose salary>=50000 ");
array.forEach(element => {
    if(element.emp_salary>=50000){
        console.log(`Employee Id: ${element.emp_id} Employee Name: ${element.emp_name} Department :${element.emp_dept}  Salary: ${element.emp_salary}  Company Name : ${element.emp_company}`);
    }
});
console.log("-------------Sum of salary of all employee--------------------- ");
var sum=0
array.forEach(element => {
    sum=sum+element.emp_salary;
    
});
console.log(sum);
console.log("-------------Average of Salary--------------------- ");
var sum=0
array.forEach(element => {
    sum=sum+element.emp_salary;
    
});
console.log(sum/array.length);
console.log("..........IT & HR department employee details whose salary >=75000");
array.forEach(element => {
    if (element.emp_dept=="IT" && element.emp_dept=="IT"&& element.emp_salary>=75000) {
        console.log(`Employee Id: ${element.emp_id} Employee Name: ${element.emp_name} Department :${element.emp_dept}  Salary: ${element.emp_salary}  Company Name : ${element.emp_company}`);

    }
});
