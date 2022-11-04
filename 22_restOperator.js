'use strict'

function display(name, ...myName) {
    console.log(name, myName);
    console.log(typeof myName);
}
display("Anil", 31, "city", true);

function display(x,y=10) {
    console.log(x/y);
    
}
display(10,5);
