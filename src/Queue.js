// Queue is a non-primitive linear data structure that permits insertion of an element at one
// end and deletion of an element at the other end.

function nextIntline(arr , num){
    arr.push(num);
    return arr.shift();
}
    var myArray = [1,2,3,4,5];

    console.log("Before"+JSON.stringify(myArray));
    console.log(nextIntline (myArray , 6));
    console.log("Aftar "+JSON.stringify(myArray));


 /*JSON ----> JSON is a format for storing and transporting data.
   JSON is often used when data is sent from a server to a web page

   JSON stands for JavaScript Object Notation
   JSON is a lightweight data interchange format
   JSON is language independent *
   JSON is "self-describing" and easy to understand
 */

   // JSON Stringify is a method in JavaScript that converts JavaScript objects into JSON strings


    function nextIntline(arr ,num){
        arr.push(num);
        return arr.shift();
    }
     var myArray =[12,34,56,89];
    console.log("Before"+JSON.stringify(myArray));
    console.log(nextIntline(myArray,6));
    console.log("Aftar"+JSON.stringify(myArray));