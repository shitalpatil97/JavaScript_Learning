let objectShital={
    fullName:"Shital Suresh Patil",
    age:24,
    ismarried:true,
}
for (const key in objectShital) {
    if (Object.hasOwnProperty.call(objectShital, key)) {
        const element = objectShital[key];
        console.log(element);
        
    }
}