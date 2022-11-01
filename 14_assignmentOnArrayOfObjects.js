class Bank{
    constructor(bank_name, account_no,bank_city,bank_state,branch_code,bank_contact,IFSC_code){
        this.bank_name=bank_name,
        this.account_no=account_no,
        this.bank_city=bank_city,
        this.bank_state=bank_state,
        this.branch_code=branch_code,
        this.bank_contact=bank_contact,
        this.IFSC_code=IFSC_code
    }
}
let axis_bank=new Bank("Axis Bank",123456789,"Sangola","Maharashtra",123456,8793456789,"AXIS1234000");
let sbi_bank=new Bank("state bank of india",123456789,"Pune","Maharashtra",123456,8793456789,"SBI00000123");
let icici_bank=new Bank("ICICI",123456789,"Solapur","Maharashtra",123456,8793456789,"ICICI1234000");
let kotak_bank=new Bank("Kotak Bank",123456789,"Sangli","Maharashtra",123456,8793456789,"KOTAK1234000");
let hdfc_bank=new Bank("HDFC Bank",123456789,"jath","Maharashtra",123456,8793456789,"HDFC1234000");
let panjab_bank=new Bank("Panjab Bank",123456789,"Kolhapur","Maharashtra",123456,8793456789,"PUJ1234000");

let array=[axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,panjab_bank];

console.log("Print all bank object bank name and location");
for (const iterator of array) {
    console.log(` Bank name :${iterator.bank_name}, Location:  ${iterator.bank_city}`);
    
}
console.log(".............................................................................................................");
console.log("Bank details of bank having name Kotak Bank");
for (const iterator of array) {
    if(iterator.bank_name=="Kotak Bank")
    {
        console.log(`${iterator.bank_name}, ${iterator.bank_city}, ${iterator.account_no}, ${iterator.bank_contact}`);

    }
    


    
}
console.log("...............All bank object details..................................");

for (const iterator of array) {

    console.log(iterator);
    
}

