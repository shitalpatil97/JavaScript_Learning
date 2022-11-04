var a=100;
function closureExp() {
    var b=200;
    var innerFun=function()
    {
        var c=300;
        console.log(a,b,c);
    }
    return innerFun;
    
}
 var s=closureExp();
s();