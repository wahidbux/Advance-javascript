/**
 * Destructuring is a JavaScript expression that allows us to extract data from arrays,
 *  objects,and maps and set them into new, distinct variables. 
 * Destructuring allows us to extract multiple properties, or items, from an array​ at a time
 */

// Assign varibale form object 
var data = {a:23,b:78,c:12 };
const {a,b,c}=data;
console.log((b));

// Assign variables form nested object 
var person ={
    persson1:{name:"wahid" ,age:23 },
    person2:{name : "Asad ",age:16}
};
const {person2:{name:person2Name, age:person2Age}}=person;
console.log(person2Name);

// Assign variables from arrays

const [x,y]=[1,2,3,4,5];
console.log(x,y);

// Using rest opreator to reassign array variables 

const [p,q,...rest]=[1,2,3,4,5];
console.log(...rest);


