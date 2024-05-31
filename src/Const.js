
// Mutate an array declared 
const s = [2,3,4];
function myFunction(){
    s[0]=[8];
    s[1]=[5];
    s[2]=[2];

}
myFunction();
console.log(s);

// Prevent object mutation.

function freezeObj(){
    const MATH_CONSTANTS={
        PI:3.14,
    };
Object.freeze(MATH_CONSTANTS);

    try{
        MATH_CONSTANTS.PI=78
    }catch(ex){
        console.log(ex);
    }
   return MATH_CONSTANTS;
}
const PI=freezeObj();
console.log(PI);

