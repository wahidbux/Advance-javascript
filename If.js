
function myFunction (isTrue){
    if (isTrue){
        return " Yes This is true ";
    }
    return "No This is not true ";
}
console.log(myFunction(true)); 

// Comparison Opreator in if statement 

function myData(num){
    if (num==12){
        return "The number is equal to 12 ";
    }
    return "This number is not equal to 12 ";
}
console.log(myData(12));

//comparison with the inequality opreator 

function myData1(num){
    if (num!=12){
        return "The number is not equal to 12 ";
    }
    return "This number is equal to 12 ";
}
console.log(myData1(10));

// Comparision with logical and opreator 

function myFunction1 (value){
    if (value>100){
        return " The value is greater than 100";
    }
    if(value>10){
        return "The value is greater than 10";
    }
    return "The value is not greater than 100 and 10";
}
console.log(myFunction1(30));

// Comparision with the greater than or equal to opreator

function myFunction2(value){
    if (value>=12){
        return "The value is greater than or equal to 12";
    }
    if (value >=30){
        return "The value is greater than or equal to 30 ";
    }
    return "The value is not greater than or equal to 12 and 30";
}
console.log(myFunction2(12));

// comparision with the less than opreator 

function myFunction3(value){
    if (value<12){
        return "The value is less than 12";
    }
    if (value <30){
        return "The value is less than 30 ";
    }
    return "The value is not less than 12 and 30";
}
console.log(myFunction3(26));

//comparision with the less than or equal to opreator 


function myFunction4(value){
    if (value<=12){
        return "The value is less than or equal to 12";
    }
    if (value <=30){
        return "The value is less than or equal to 30 ";
    }
    return "The value is not less than or equal to 12 and 30";
}
console.log(myFunction4(10));

//Comparision with logical And opreator

function myFunction5(value){
    if (value <=12 && value >=30){
        return "Yes";
    }
    return " No";
}
console.log(myFunction5(23));

//Comparision with logical Or opreator

function myFunction5(value){
    if (value <=12 || value >=30){
        return "Yes";
    }
    return " No";
}
console.log(myFunction5(40));

