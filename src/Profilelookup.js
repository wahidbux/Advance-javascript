
var contacts =[
      {
    "firstname": "wahid ",
    "lastname ": "bux ",
    "number ": "023843042",
    "likes":["javascript ","java ","c++"]
      },
      {
        "firstname": "Asad",
        "lastname ": "Ali ",
        "number ": "023324240",
        "likes":["football","cricket","tag of war "]
      },
      {
        "firstname": "Ameen ",
        "lastname ": "Ali",
        "number ": "902382323",
        "likes":["nodejs ","javascript","reactjs"]
      },
      {
        "firstname": "Ali ",
        "lastname ": "jan ",
        "number ": "023843042",
        "likes":["reading ","books ","writting "]
      }

];
function lookUpProfile(name,prop){
    for (var i = 0; i<contacts.length; i++){
        if (contacts[i].firstname==name){
            return contacts[i][prop] || "No such property ";
        }else{
            return "No such property ";
        }
    }
    return contacts;
}
var data = lookUpProfile("wahid ","likes");
console.log(data);
