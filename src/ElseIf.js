function myFunction(value){
    if (value <=20){
        return "Yes the value is less than or equal to 20";
    }else if(value>=23){
        return " Yes the value is greater than or equal to 23";
    }else{
        return " No"
    }
}
console.log (myFunction(60));

// changing the if else statement 

function myFunction1(value){
    if (value < 20){
        return " less";
    }else if(value > 20){
        return " greater";
    }else if(value <=20 ){
        return " less or equal to ";
    }else if(value >=20){
        return "greater than or equal to ";
    }else{
        return "All condition are false ";
    }
}
console.log(myFunction1(21));

var names = ["Monday ", "Tuesday","wednesday","Thrusday","Friday","Sutarday","Sunday"];
function myFunction2(value , num ){
    if(num==1){
        return names[0];
    }else if(num <= value-2){
        return names [1];
    }else if(num == value -1){
        return names [2];
    }else if(num == value){
        return names [3];
    }else if(num <= value +1){
        return names[4];
    }else if(num >= value +2){
        return names [5];
    } else if(num >= value +3 ){
        return names [6];
    }
}
console.log(myFunction2(5,2));

