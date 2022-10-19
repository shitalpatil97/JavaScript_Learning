function gradeSystem(score) {
    if (score<35) 
    {
        console.log(` Score is ${score} You are fail`);
        
    } 
    if (score>=35) 
    {
        console.log(`Score is ${score} You are passed`);
    }
    if(score>=35 && score<60)
    {
        console.log(`Score is ${score} Grade is "C"`);
    }
    if (score>=60 && score<75) {
        console.log(`Score is ${score} Grade is "B"`);
        
    }
    if(score>=75 && score<=90){
        console.log(`Score is ${score} Grade is "A"`);
    

    }
     if (score>=90 && score<=100) {
        console.log(`Score is ${score} Grade is "A+"`);
        
    }
    else if(score<0 || score==" "|| score==null||score==undefined || score=="Fifty Five")
    {
        console.log(`if score is ${score} Invalid Input`);
    }
}

gradeSystem(35);
console.log(".........................................................................");
gradeSystem(66);
console.log(".........................................................................");

gradeSystem(13);
console.log(".........................................................................");

gradeSystem(" ");
console.log(".........................................................................");

gradeSystem(98);
console.log(".........................................................................");

gradeSystem("Fifty Five");
console.log(".........................................................................");

gradeSystem(75);
console.log(".........................................................................");

gradeSystem(null);
console.log(".........................................................................");

gradeSystem(undefined);
console.log(".........................................................................");

gradeSystem(-20);
console.log(".........................................................................");

gradeSystem(55);
console.log(".........................................................................");

gradeSystem(82);
console.log(".........................................................................");
