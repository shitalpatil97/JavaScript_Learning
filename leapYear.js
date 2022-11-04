function leapYear(year) {
    if (year=Number) {

        if(year%4==0 && year%100!=0 || year%400==0)
    {
        console.log(`This is leap year ${year}`);
    }
    else
    {
        
        console.log(`This is not leap year ${year}`);
    }
   
    
            
    }
    

    
    
}
leapYear(2024);