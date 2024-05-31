/*A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).*/

function wordBlanks (myNoun, myAdjective , myVerb , myAdverb ){
    var result = "The "+myAdjective+ " "+myNoun+" "+myVerb+" "+"to the store "+myAdverb;
    return result;
}
console.log(wordBlanks("dog ", "big", "run", "quickly "));
console.log(wordBlanks("run ", "boy", "towords", "quickly "));


function myFunction (){
    console.log ("Hello world ");
}
myFunction();

// Passing values to functions with arguments 

function myFunctionWithArgs(a,b){
    console.log(a-b);
}
myFunctionWithArgs(20,10);

//Global scope and functions 

var myGlobal = 10;
function fun1(){
    ourGlobal=5;
}
function fun2(){
    var output="";
    if(typeof myGlobal != undefined){
        output += "myGlobal"+myGlobal ;
    }
    if(typeof ourGlobal != undefined){
        output += "ourGlobal"+ourGlobal ;
    }
console.log(output);
}
fun1();
fun2();

// Local scope and functions 

function function1(){
   var myVaribale = 10
   console.log(myVaribale);
}
function1();

// Globla vs Local scope and functions 

/*var myFirstName = "wahid ";
function fun3(){
     
     return myfirstName;
}
console.log(fun3());*/

// Return a vlaue from a function with return 

function myFunction1(num){
    return num - 8;
}
console.log(myFunction1(10));

function fiveTimes(num){
    return num * 5;
}
console.log(fiveTimes(10));

// Understanding undefiend value returned form the functions 

var sum =0;
function Addthree(){
    sum = sum + 8;
}
console.log(Addthree());

// Assignment with a return value 

var number = 0;
function myNumber(num){
    return (num+5)*5
}
number=myNumber(2);

// returning boolean values from functions 

function isLess (a ,b ){
    return a<b;
}
console.log(isLess(10,15));

// Using Arrow  function to wrte concise anonymus functions

const magic =() => new date ();
//Anonymous Function
(()=> {console.log('anomous........')})();

(function(){console.log('anomous99........')})();

(()=> {console.log('anomous2........')})();


// Write Arrow fucntion with parameters 

var myConcat = (arr1 , arr2)=> arr1.concat(arr2);

// var myConcat = (arr1 , arr2)=>{ 
//     let a=10;
//     return arr1.concat(arr2)
// };

console.log(myConcat([[12,23,45],[3,67,9]]));

// Write high order arrow function 

//filter -->The filter() method creates a new array filled with elements 
//that pass a test provided by a function.

    // map --> map() is a method of the Array object. It creates a new array by calling 
   //  a function on every element of  the original array and storing the results in a new array.

const realNumberArray =[4,5.7,37,89.9,-3];
const squareList = (arr)=>{
    const squareInteger=arr.filter(num =>Number.isInteger(num)&&num>0).map(x=> x * x);
    return squareInteger;

}
const squareInteger = squareList(realNumberArray)
console.log(squareInteger);

// Write higher order arrow function 
const increament = (function(){
    return function increament(number, value =1){
    return number+value;
    }
})();
    console.log(increament(5,2));
    console.log(increament(5));

// Use the rest opreator with function parameters 
// .... rest opreator--> A rest operator is a type of parameter that gets all of the
//                       remaining parameters of a function call via an Array
const sum1 = (function(){
    return function sum1 (...args){
        return args.reduce((a,b) => a+b,0);
    }
})();
console.log(sum1(1,2,3));

// using spread opreator to evalute array in-place

const arr1 =["JAN" , "FEB" ,"MAR","APR","MAY"];
let arr2;
(function(){
    arr2=arr1;
    arr1[0] = 'wahid ';
})();
console.log(arr2);

// Write concise declarative function 
const bicycle ={
    gear :2,
    setGear(newGear){
        this.gear=newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

