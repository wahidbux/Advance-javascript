
function randomNumber(value){
    //floor round of down
    //ceil round of up
    return {floor:Math.floor(value *10), ceil:Math.ceil(value*10) };
}
console.log(randomNumber(7.99));

function randomWholeNum(){
    return Math.floor(Math.random()*10);
}
console.log(randomWholeNum());

// Genreate random numbers within range 

function ourRandomRange (min,max){
  return Math.floor (Math.random () *(max-min+1))+min;
}
console.log(ourRandomRange(2,20));

// Using parseInt function 
//// parseInt ---> it convert String formate integer value into interger.

function convertToInt(Str){
    return parseInt(Str); 
}
console.log(convertToInt("1213"));

