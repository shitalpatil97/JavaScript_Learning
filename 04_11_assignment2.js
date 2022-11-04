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
const emp_radha=new Employee(33,"Radha","HR",74000,"WIPRO");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"WIPRO");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi= new Employee(99,"Mahesh","HR",85000,"Infy");

let array=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log("********Displaying the employee names who is working in TCS**********");

for (const employee of array) {
    if(employee.emp_company==="TCS"){
        console.log(`Employee name: ${employee.emp_name} Company Name ${employee.emp_company}`);
    }
    
}
console.log("********Displaying the employee names who is working in Finance Department**********");

for (const employee of array) {
    if (employee.emp_dept==="Finance") {

                console.log(`Employee name: ${employee.emp_name} Department Name ${employee.emp_dept}`);

    }
    
}
console.log("********Employee details whose name starts with 'R' **********");
for (const employee of array) {
    if (employee.emp_name.startsWith("R")) {
        console.log(`Employee ID: ${employee.emp_id}, Employee name: ${employee.emp_name},  Department Name ${employee.emp_dept} , Employee Salary: ${employee.emp_salary} and Employee Company: ${employee.emp_company}`);

        
    }
    
}
console.log("*********Employee details whose salary is greater than 70000*************");
for (const employee of array) {
    if (employee.emp_salary>70000) {
        console.log(` Employee name: ${employee.emp_name} , Employee Salary: ${employee.emp_salary} and Employee Company: ${employee.emp_company}`);

        
    }
    
}
console.log("*********Employee details whose salary is greater than or equal to 50000 and department is IT*************");
for (const employee of array) {
    if (employee.emp_salary>=50000 && employee.emp_dept==="IT") {
        console.log(`Employee ID: ${employee.emp_id}, Employee name: ${employee.emp_name},  Department Name ${employee.emp_dept} , Employee Salary: ${employee.emp_salary} and Employee Company: ${employee.emp_company}`);

        
    }
    
}
console.log("*********Employee details who is working in Infy*************");
for (const employee of array) {
    if (employee.emp_company==="Infy") {
        console.log(`Employee ID: ${employee.emp_id}, Employee name: ${employee.emp_name},  Department Name ${employee.emp_dept} , Employee Salary: ${employee.emp_salary} and Employee Company: ${employee.emp_company}`);

        
    }
    
}
