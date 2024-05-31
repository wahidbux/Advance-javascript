/*
An alternative to the if/else statement, 
the ternary operator allows JavaScript developers to write concise conditional statements. 
It is written as “?:”
*/

function checkEqual(a,b){
 
    return a===b ? true : false;
}
console.log(checkEqual(2,9));

// Using multipile ternary opreator 

function checkSign (num){
    return num>0 ? "Positive" : num<0 ? "Negative ": "Zero";
}
console.log(checkSign(8));