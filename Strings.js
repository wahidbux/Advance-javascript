//A string is a data type used in programming, that is used to represent text rather than numbers

var myString = "I am a student";
console.log(myString);

var myFirstName = "Wahid ";
var myLastName  = "Bux   "; 

// Escaping literal quotes in strings 

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

// Quoting strings with single quotes

let text = 'it\s alright ';
console.log(text);

//Escape sequence in strings 
/*
Six other escape sequences are valid in JavaScript:

Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
*/

var myString = "FirstLine\n\tSecondLine\nThirdLine";
console.log(myString);

// Concatenating strings with plus opreator

var myS = "My name is wahid " + "and i am currently enrolled in Muet. ";
console.log(myS);

// // Concatenating strings with plus equal opreator

var myScentence  = "This is the first sentence " 
 myScentence  += "This is the second sentence ";
 console.log(myScentence);

 // Constracting strings with variables 

 var myName = "wahid "
 var myst = " My name is " + myName + " and i am well ";
 console.log(myst);

 // Appending varibles in strings 
 
 var firstString = " in programming ";
 var secondString = " I am very intrested ";
 secondString += firstString;
 console.log(secondString);

 // Finding the length of strings 

 var fString = "wahid";
 console.log(fString.length);

 var lastNameLength = 0;
 var lastname = "wahid bux ";
 lastNameLength = lastname.length;
 console.log(lastNameLength);

 // Brecket notation to find first character in string 

 var firstLetterOfLastName= "";
 var lastname = "wahid ";
 firstLetterOfLastName = lastname [0];
 console.log(firstLetterOfLastName);

 
 // Brecket notation to find last character in string 
 var lastLetterOfString= "wahid";
 lastLetterOfString = lastLetterOfString[lastLetterOfString.length-1];
 console.log(lastLetterOfString);

// String immutability 

var String = "jello world ";
String = "Hello world ";
console.log(String);

// Create strings using template litreals 

//Template literals, also known as template strings, are a feature 
//in JavaScript that allow for easier string interpolation and multi-line strings. 
const person ={
    name : "wahid bux ",
    age : 23
};
const greeting = `Hello, my name is ${person.name}!
i am ${person.age} years old.`;

console.log(greeting);



// Coding challange 

const result={
        success:["max_length ","no_amd","prefer_arrow_function"],
        faliuer:["no_var","var_on_top","linebreak"],
        skipped:["id_blacklist","no_dup_keys"]

};
function makeListOF(arr){
    const resultDisplayArray=[];
    for (let i=0; i<arr.length ; i++){
        return resultDisplayArray.push(`<li class= "test_worning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}
const resultDisplayArray = makeListOF(result.faliuer);
console.log(resultDisplayArray);





