//The switch statement is used to perform different actions based on different conditions.

function myFunction(value){
    var result ="";
    switch(value){
        case 1:
            result ="Monday";
            break;
        case 2:
            result ="Tuesday";
            break;
        case 3:
            result ="Wednesday";
            break;
        case 4:
            result ="Thursday";
            break;
        case 5:
            result ="Friday";
            break;
        case 6:
            result ="Sutarday";
            break;
        case 7:
            result = " Sunday";
            break;
        default :
            result = "Given expresion is invalied ";
    }
    return result;
}
console.log(myFunction(8));

// Multi identical option in switch case 

function myFunction1(value){
    var answer = " ";
    switch(value){
        case 1:
        case 2:
        case 3:
            answer = " Low ";
            break;
        case 4:
        case 5:
        case 6:
            answer = " Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = " High";
            break;
    }
    return answer;
}
console.log(myFunction1(5));



