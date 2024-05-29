// A for loop repeats until a specified condition evaluates to false. 

var myArray=[];

for (var i=0; i < 10; i++) {
    myArray.push(i);
} 
console.log(myArray);

// Adding number through for loop 

var ourArray = [];
for (var i= 0 ; i<=10 ; i+=2){
    ourArray.push(i);
}
console.log(ourArray);

// Count backword with for loop 

var myData =[];
for (var i =10 ; i>=0; i-=2){
    myData.push(i);
}
console.log(myData);

// itreates through an array with for loop 

var ourData = [2,3,4,5,6];
var total = 0;
for (var i = 0; i < ourData.length; i++){
    total+=ourData[i];
}
console.log(total);

// Nested for loop in array 

function fun1 (Arr){
    var product= 1;
   for (var i = 0; i<Arr.length; i++){
     for (var j = i ; j<Arr[i].length ;j++){
        product*=Arr[i][j];
     }
   }
    return product;
}
var product=fun1([[1,2,3],[4,5,6],[5,7,8]]);

console.log(product);

