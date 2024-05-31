//An array is a special variable, which can hold more than one value.

//var myArray = ["wahid ", 33]; //just a comment
console.log(myArray);

// Nested array in javascript 

var myArr =[["wahid " , 24],["Mari", 87]];
console.log(myArr);

// Access array data with indexes

var myArray = [23,45,67];
var myData = myArray[0];
console.log(myData);

// Modefy array data with indexes 

var ourArray = [67,90,56];
ourArray[2] = 20;
console.log(ourArray);

// Access multi- dimensional arrays with indexes 

var mArray= [[1,3,2],[4,3,2],[6,5,6,],[[23,6,5],[9,4,3,]]];
var ourData = mArray [2][1];
console.log(ourData);

// Manipulate array with push()

var firstArray=[["wahid ",33],["Bux",45]];
firstArray.push(["Mari",2]);
console.log(firstArray);

// Manipulate array with pop()

var secondArray = [["Wahid",33],["Bux",45]];
var data = secondArray.pop();
console.log(secondArray);

// Manipulate array with shift()

var arr = [["Wahid",33],["Bux",45]];
var arr1 = arr.shift();
console.log(arr);

// Manipulate array with unshift()
 
var myFirstArray= [["Wahid ",22],["Bus",90]];
myFirstArray.unshift(["Mari",44]);
console.log(myFirstArray);

// Using destructuring assignment to assign variable form arrays 

const [x , y, ,z ]=[1,2,3,4,5,6,7,8];
console.log(x,y,z);
let a=5 , b=7;
(()=>{
[a,b]=[b,a];
})();
console.log(a);
console.log(b);

// using destructuring assignment with rest opreator.
// A rest operator is a type of parameter that gets all of the 
// remaining parameters of a function call via an Array 

const source =[1,2,3,4,5,6,7,8,9,10];
function removeFirstTow(list ){
   const [, ,...value] =list;
   return value;
}
const value = removeFirstTow(source);
console.log(value)
console.log(source);


