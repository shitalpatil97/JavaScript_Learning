var compareOperator=function(arg1,arg2){
var result= arg1>arg2?arg1:arg2;
console.log(`Greatest numbers among two numbers ${arg1},${arg2} that is :${result}`);
}
compareOperator(10,-10);
compareOperator(800,899);
var evenOdd=function(arg1){
    

    var res=(arg1%2==0)?true:false;
    console.log(`Given number ${arg1}:${res}`);

}
evenOdd(29);
evenOdd(44);
evenOdd(0);
evenOdd(101);
 var evenOddStr=function(arg1){
    var len=arg1.length;
    var s=(len%2==0)?"EVEN":"ODD"
    console.log(`Word ${arg1} length is:${s}`);

 }
 evenOddStr("JavaScript");
 evenOddStr("developer");
 evenOddStr("Google");