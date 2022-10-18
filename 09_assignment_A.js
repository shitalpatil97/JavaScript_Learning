var str="I am very good IT Developer";
str=str.toLowerCase();
    var vowelCount=0;
    var vowels=['a','e','i','o','u'];
    for (let char of str) {
        if(vowels.includes(char)){
            vowelCount++;


        }
        
        
    }
    console.log(`Total number of vowels in "${str}" is :${vowelCount}`);

    console.log("......................Program for sum of cute..............................");

    function sumOfCube() {
        var count=0;
    for (let index = 1; index <=5; index++) {
        count=count+(index*index*index);
        
        
    }
    console.log(`sum of cube number from 1-5:${count}`);
        
    }
    sumOfCube();

    console.log(".................................................................................");

    console.log(`WAP to print odd position characters of given string is "Hard work always pays back" and "Soon I will be IT angular Champ" `);

    function oddPositionedChars(str) {
        for (let index = 0; index < str.length; index++) {
            var char=str.charAt(index)
            if (index%2==0 && char!=' ') {
                //console.log(`odd position characters of "${str}" given string is :`);
                console.log(`${char}`);
                
            }


        }
        
    }
    oddPositionedChars("Hard work always pays back");
    console.log("......................Program for sum of cute..............................");
    oddPositionedChars("Soon I will be IT angular Champ");