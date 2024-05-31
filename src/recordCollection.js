
var collection ={
    "1243": {
        "firstname ": "wahid ",
        "lastname ": "Bux",
        "characteristics":[
            "He is very hardworking ",
            "He is looking good "
        ]
    },

    "4567":{
        "firstname ": "Asad",
        "lastname ": "Ali",
        "characteristics":[
            "he is not hardworking ",
            "he is bad boy ",
        ]
    },

    "3467":{
        "firstname ": " Ali ",
        "lastname": "jan",
        "characteristics":[
            "he is not hardworking ",
            "he is good  boy ",
        ]
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));
// JSON.parse ----> keep the copy of collection of test 

function UpdateRecords (id , prop, value){
   if (value ==="" ){
    delete collection [id][prop];
   }
   else if(prop === "characteristics") {
    collection [id ][prop] = collection [id][prop] || [];
    collection[id][prop].push(value);
   }else {
    collection[id][prop]=value;
   }

    return collection;
}
console.log(UpdateRecords("1243" , "firstname", "wahid"));