/*const { list } = require("pdfkit");
var myDog = {
    "Name" : "Tony",
    "Legs" : "4",
    "tails": "1",
    "friends":["evrything "],
};*/

// Accessing object properties with dot notation 

var testObject={
    "hat ": " good",
};
var hatValue= testObject;

// Accessing object properties with breacket notation 

var testObj={
    "my name ": " wahid ",
    " my age ": " 23",

}
var mynameValue = testObj["my name "];
var myageValue = testObj[" my age "];
console.log (mynameValue);
console.log(myageValue);

// Accessing object properties with variables 

var testMyObj={
      12: "wahid",
      23: "Ali ",
      33: "Ghous",
}

var playerNumber = 12;
var player = testMyObj[playerNumber];

// Updating object properties 

var Dog= {
    "Name" : "Tony",
    "Legs" : "4",
    "tails": "1",
    "friends":["evrything "],
};
Dog.Name = " Happy tony ";

// Add new properties to an object 

var Student ={
    "name": "wahid",
    "age ": "24",
    "Address": "Nawabshah ",
    "Roll no": "k22SW033",
};
Student.cast = "Mari";
console.log(Student);

// Delete properties from an object
var Student1 ={
    "name": "wahid",
    "age ": "24",
    "Address": "Nawabshah ",
    "Roll no": "k22SW033",
};
delete Student1.Address;
console.log(Student1);

// Using objects for lookups

function myLookUp(value){

    var result = " ";
    var lookup={
       "Wahid ": "Mari",
       "Zohaib ": "Khoso",
       "Adeel ": "Sommro",
       "Jawad" : "Jamali"
    };
    result=lookup[value];

    return result;
}
console.log(myLookUp("Wahid"));

// Testing objects for properties 

var Student2 ={
    name: "wahid",
    age : "24",
    Address: "Nawabshah ",
    Rollno: "k22SW033",
};

function fun1(checkprop){
    if (Student2.hasOwnProperty(checkprop)){
    return Student2[checkprop];
}else{
    return " Not Found ";
}
}
console.log(fun1("name"));

// Manipulating complex objects 

var myEmp=[
       {
        "name":"Ali",
        "id":"1243",
        "salary":"12000",
       },
       
       {
        "address":"SBA",
        "hair_date":"12_10_20018",
       },
]
console.log(myEmp);

// Accessing nested objects 

var myCar={
        "Car":{
            "inside":{
            " dishborad ": "LCD",
            "passenger seat":"crumbs"
            },
            "outside":{
                "trunck":"jack",
            }
        }
};
var dishborad = myCar.Car.inside[dishborad];
console.log(dishborad);

// Accessing nested arrays

var myPlant=[{
    type: "flowers",
    list: [
        "rose",
        "tulip",
        "dandline"
    ]
},
{
    type : "trees",
    list : [
        "fir",
        "pine",
        "brich"
    ]
}
];
var secondTree = myPlant[1].list[1];
console.log(secondTree);

// Write concise object litreals declaration using simple fields 
/**
 * Literal Objects in javascript are data container, 
 * which contains of data/properties in the key-value pair
 */

const createPerson = (name , age ,gender) =>{
    return{
        name:name ,
        age : age ,
        gender: gender 
    };
}
console.log(createPerson("wahid ", 23 ,"Male"));

// object litreal

const createPersonOf = (name , age ,gender) => ({name , age ,gender});
console.log(createPersonOf("wahid ", 23 ,"Male"));


