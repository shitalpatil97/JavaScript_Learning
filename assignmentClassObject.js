class Vehicle{
    constructor(v_name,v_price,v_color,v_avg){
        this.vehicle_name=v_name;
        this.vehicle_price=v_price;
        this.vehicle_color=v_color;
        this.vehicle_average=v_avg;
    }
}
let vehicle1=new Vehicle("Honda Dream Yuga",94000,"Black",'72 km/l');
let vehicle2=new Vehicle("Audi","43.12 Lakh","Black","17 km/l");
let vehicle3 =new Vehicle("BMW","1.78 Cr","white","15 km/l");
let vehicle4=new Vehicle("Bentley","3.91 Cr","Red","12.9 km/l");
console.table(vehicle1);
console.table(vehicle2);
console.table(vehicle3);
console.table(vehicle4);

console.log(".............................................................................................");

class College{
    constructor(colg_name,colg_owner,colg_city,colg_univercity){
        this.college_name=colg_name;
        this.college_owner=colg_owner;
        this.college_city=colg_city;
        this.college_univercity=colg_univercity;
    }
}
let college1=new College("Fabtech Technical Campus","Birasaheb Rupner","Sangola","Batu");
let college2= new College("New Satara College","Shivaji Nikam","Pandharpur","MSBTE");
let college3=new College("Singhad","M.N.Navale","Pune","Pune");
let college4=new College("JSPM","T.J. Sawan","Narhe","Pune");
console.table(college1);
console.table(college2);
console.table(college3)
console.table(college4);

console.log("...................................Object Traversing using for-in loop.................................................");
function traverseObject(arg1) {
    for (const key in arg1) {
        if (Object.hasOwnProperty.call(arg1, key)) {
            
            console.log(`${key} = ${arg1[key]}`);
            
        }
    }

    
}

traverseObject(college1);
console.log("...................................................................................");
traverseObject(college2);



