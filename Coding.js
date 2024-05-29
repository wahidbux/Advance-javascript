// 1. Write a JavaScript function to calculate the sum of two numbers. 
function myFunction (a,b){
     return a+b;
}
console.log(myFunction(20,10));


// 2. Write a JavaScript program to find the maximum number in an array. 

var arr =[89,2,34,56];
function findMaxArr(arr){
    return Math.max(...arr)
}
console.log(findMaxArr(arr));

// 3. Write a JavaScript function to check if a given string is a palindrome
// (reads the same forwards and backwards).
var str = "I am wahid bux ";
function checkIf (str){
    return str===str.split(str).reverse(str).join();
}
console.log(checkIf(str));



// 4. Write a JavaScript program to reverse a given string. 

var String = "wahid";
const reverseString = (String) => String.split(String).reverse(String).join();
console.log(reverseString(String));

// 5. Write a JavaScript function that takes an array of numbers 
//    and returns a new array with only the even numbers. 
var Array=[1,2,3,4,5,6,7,8];
function filterEvenNum(num){
    return num.filter(num => num%2==0);
}
console.log(filterEvenNum(Array));

// 6. Write a JavaScript program to calculate the factorial of a given number. 

var number=[5];
function Factorial (number){
    if (number==1){
        return 1;
    }else{
        return number*Factorial(number-1);
    }
}
console.log(Factorial(number));

// 7. Write a JavaScript function to check if a given number is prime. 
var num1 = 11;
function isPrime(num1){
    if (num1<=1){
        return flase ;
    }
    for (let i=2;i<=Math.sqrt(num1);i++){
        if(num1 % i==0){
            return false 
        }
        return true ;
    }
}
console.log(isPrime(num1));

// 8. Write a JavaScript program to find the largest element in a nested array.

var myArray = [[65,12,34],[78,5,42]];

function findLargestArray (myArray){
    let largest=myArray[0][0];
    for ( let arr of myArray){
        for (let num of arr){
            if(num > largest){
               return largest =num;
            }
        }
    }
    return largest;
}
console.log(findLargestArray(myArray));


// 9. Write a JavaScript function that returns 
//    the Fibonacci sequence up to a given number of terms. 

var numbers=10;
function fibonnaciSequence(numbers){
    if (numbers <= 0) return []; 
    if (numbers === 1) return [0]; 
    let sequence = [0, 1]; 
  while (sequence.length < numbers) { 
    let nextNumber = sequence[sequence.length -1] + sequence[sequence.length -2]; 
    sequence.push(nextNumber); 
  } 
  return sequence; 
}
console.log(fibonnaciSequence(numbers));

// 


