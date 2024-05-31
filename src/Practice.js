
/*let x;
let y=20;
console.log(x);

var myfirstName ;
myfirstName ="Wahid ";
console.log(myfirstName);

var sum = 10+23;
console.log(sum);

var diffrence = 67-34;
console.log(diffrence);

var product = 40*3;
console.log(product);

var quotient = 80/10;
console.log(quotient);

var remainder = 54%6;
console.log(remainder);

var mynumber =200;
mynumber++;
console.log(mynumber);

var myNo =100;
myNo--;
console.log(myNo);

var a = 8;
var b= 20;
var c= 10;

a = a+2;
b= b+10;
c=c+3;
a+=2;
console.log(a)

var myString ="Wahid ";
console.log(myString);

// Escaping litreal quotes in string 

var myStr ="this is \"the first\" \"sentence\ only";
console.log(myStr);

// quoting in string with single qoutes 

var mySt = 'it\s alright ';
console.log(mySt);

//concatenating  of the string 

var myFirstSentence = "This is the first sentence "+"this is the second sentence";
console.log(myFirstSentence);

// Concatenating with plus equal opreator 

var myName = "This is the first sentence " 
 myName +="and this is the sencond sentence";
 console.log(myName);

 // Finding the length of the string
 
 var myfirstName = "wahid";
 console.log(myfirstName.length);

 // finding the first character of String 
 var myFirstString = "";
 var mySecondString = "wahid";
 myFirstString =mySecondString [1];
 console.log(myFirstString);

 // Finding the last character of string 

 var mStr ="wahid";
 mStr = mStr[mStr.length-1];
 console.log(mStr);

 var ourFirstName = "Wahid ";
 var ourLastName = "Hello i am "+ourFirstName+"and i am well.";
 console.log(ourLastName);

 // Appending in string using plus equal oprator 

 var firstString = " in programming ";
 var  secondString = "I am very intrested ";
 secondString+=firstString;
  console.log(secondString);

// immutability in string 
var String = "jello world ";
 String = "Hello world ";
 console.log(String);


 var arr = [12 ,34 ,45];
 console.log(arr);
// Nested array 
 var array = [[12,23,45],[67,45,89]];
 console.log(array);
 
// Multi-dimensional array 

var myarray = [[12,34,45,],[34.2,6],[1,2,4],[[12,13,14],[12,34,89]]];
console.log(myarray);

var myArray = [12,34,56];
var ourArray = myArray[1];
console.log(ourArray);

var myArr=[23,45,67];
myArr[1]=30;
console.log(myArr);

var myFirstArray=[["wahid ",33],["Bux , 90"]];
myFirstArray.push(["Mari , 76"]);
console.log(myFirstArray);


var myScondArray = [["i am  ,23"],["a student",25]];
myScondArray.pop();
console.log(myScondArray);

var myThirdArray = [["wahid ",33],["Bux , 90"]];
var myData = myThirdArray.shift();
console.log(myThirdArray);

var myArr1 = [["i am  ,23"],["a student",25]];
var myData1 = myArr1.unshift(["wahid ", 89]);
console.log(myArr1);


// Functions 
function myFunction (myNoun, myAdjective, myVerb,myAdverb){
    var result = "The "+myAdjective+" "+myNoun+" "+myVerb+" to the store "+myAdverb;

    return result;
}
console.log(myFunction("dog ","big ","run ","quickely "));


function fun1(){
    console.log("Hello world ");
}
fun1();

// Passing the values through arguments 

function fun2(a ,b){
       var sum = 12+8;
       console.log(sum);
}
fun2();


// Global scope and functions 

var myGlobal = 243;
function fun3(){
    ourGlobal = 5;
}
function fun4(){
    var output = "";
    if (typeof myGlobal != undefined){
        output+="myGlobal "+myGlobal;
    }
    if (typeof ourGlobal!= undefined){
        output+="ourGlobal "+ourGlobal;
    }
   console.log(output)
}
fun3();
fun4();*/



function checkAge(num){
    if (num>10 && num<20){
        return "The age is between 10 and 20 ";
    }else{
        return "not found";
    }
}
console.log(checkAge(21));

function domenstrateSwitch(value){
    var result ="";
    switch(value){
        case 1:
            result="Hello this is me ";
            break;
        case 2:
            result="this is not me ";
    }
    return result;
}
console.log(domenstrateSwitch(1));

function fun1(value  ){
    if (value%2==0 || value%3==0){
        return " the num is diviseble  by 2 and 3";
    }
    else{
        return "the num is not devisible  2  and 3";
    }
}
console.log(fun1(3));

function fun2(age){
    return age>=18? "You can drive " : "You can not drive yet because your age is less than 18";
}
console.log(fun2(17));

// finding marks of students 
let marks ={
    wahid : 76,
    asad : 60,
    Ameen: 78,
    Ali : 90
};
for(let i=0; i<Object.keys(marks).length;i++){
    //console.log("the marks of "+Object.keys(marks)[i]+"are "+[Object.keys(marks)[i]]);
}

// using for in loop 
for (let i in marks){
    console.log("the marks of "+i+"are"+marks[i]);
}

