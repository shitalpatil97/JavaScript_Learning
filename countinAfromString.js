var s="shital patil";
var count=0;
for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (element=='a') {

        count++;
    }
    
}
console.log(count);

const s1={};
s1.name="Shital";
console.log(s1);
delete s1.name;
console.log(s1);

function Person(name){
    this.name=name;
    this.display=function(){
        console.log("hello");
    }
}
var p=new Person("Shital");
var arr
ay=[2,0,5,7];
console.log(array.findMax);