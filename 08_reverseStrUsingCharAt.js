function reverseStr(str) {
    var res='';
    
    for (let index = str.length-1; index>=0; index--) {
        res=res+str[index];   
    }
    console.log(`The reversed string of ${str} is :${res}`);

    
}
reverseStr("Hard Work always pays back");
reverseStr("Soon I will be Angular IT Champ");