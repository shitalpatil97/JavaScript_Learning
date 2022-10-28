const array_numbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Length of array is ${array_numbers.length}`);
console.log(`First element of the array is ${array_numbers[0]} and the last element is ${array_numbers[10]}`);
console.log(`Third last element of an array is ${array_numbers[8]}`);
console.log(`Get the even number from the given array ${array_numbers}`);
for (num of array_numbers){	
    if (num % 2 == 0) {       
        console.log(num);
    }
}

console.log(`Get the odd number from the given array ${array_numbers}`);
for (num of array_numbers){	
    if (num % 2 == 1) {       
        console.log(num);
    }
}
console.log("..................Even Position elements.........................");
for (let index = 0; index < array_numbers.length; index++) {
    if(index%2==0)
    {
        const element = array_numbers[index];
        console.log(element);

    }
    
    
}
console.log("..................Odd Position elements.........................");
for (let index = 0; index < array_numbers.length; index++) {
    if(index%2==1)
    {
        const element = array_numbers[index];
        console.log(element);

    }
}

    console.log(".................Sum of array Elements......................");
    let sum=0;
    for (let index = 0; index < array_numbers.length; index++) {
        sum=sum+array_numbers[index];
        
    }
    console.log(sum);

    console.log(`Numbers which are multiple by 5 from given array is ${array_numbers}`);

    
    for (let index = 0; index < array_numbers.length; index++) {
        if (array_numbers[index]%5==0) {
            const element=array_numbers[index];
            console.log(element);
        }
        
        
    } 
    console.log(`115 is available in given array ${array_numbers} is ${array_numbers.includes(115)}`);
    console.log(`23 is available in given array ${array_numbers} is ${array_numbers.includes(23)}`);

    



