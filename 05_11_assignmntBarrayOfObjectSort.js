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

console.log(`----------Given array of object is---------------------`);
console.log(emp_anil);
console.log(emp_radha);
console.log(emp_rishi);
console.log(emp_sonali);
console.log(emp_monika);
console.log(emp_viny);
console.log(emp_mahi);


console.log("------------Sort the array of object in ascending order of Employee_id-----------");
var array1=array.sort((a,b)=>{
    return a.emp_id - b.emp_id

});
array1.forEach((value)=>{
    console.log(`Emp_id :${value.emp_id}, Emp_Name: ${value.emp_name} Emp_Dept: ${value.emp_dept}`);

})
console.log("-----------Sort the array of object in ascending order of Employee_dept----------");
var array1=array.sort((a,b)=>{
    let fa=a.emp_dept;
    let fb=b.emp_dept;
    if (fa<fb) {
        return -1
        
    }
    if (fa>fb) {
        return 1
        
    }
    return 0;

});
array1.forEach((value)=>{
    console.log(`Emp_id :${value.emp_id}, Emp_Dept: ${value.emp_dept} Company: ${value.emp_company}`);

})
console.log("---------------Sort the array of object in ascending order of Employee_Salary-----------");
var array1=array.sort((a,b)=>{
    return a.emp_salary- b.emp_salary

});
array1.forEach((value)=>{
    console.log(` Emp_Name: ${value.emp_name} Emp_Salary: ${value.emp_salary} Company:${value.emp_company}`);

});
console.log("-------------------Sort the array of object in ascending order of Employee_company name----------------");
var array1=array.sort((a,b)=>{
    let fa=a.emp_company
    let fb=b.emp_company
    if (fa<fb) {
        return -1
        
    }
    if (fa>fb) {
        return 1
        
    }
    return 0;

});
array1.forEach((value)=>{
    console.log(`Emp_id :${value.emp_id}, Emp_name : ${value.emp_name} Emp_Dept: ${value.emp_dept} Company: ${value.emp_company}`);

})