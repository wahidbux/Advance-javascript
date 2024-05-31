/**
 * import()
The import() syntax, commonly called dynamic import, is a function-like expression 
that allows loading an ECMAScript module asynchronously
and dynamically into a potentially non-module environment.
 */

import { capatilizedString , dataString} from "./String_Function.js";
const cap = capatilizedString ("Hello!");
const data = dataString ("WAHID ");
console.log(cap);
console.log(data);

//Anonymous Function
(()=> {console.log('anomous........')})();

(function(){console.log('anomous99........')})();

(()=> {console.log('anomous2........')})();

// use export to reuse a code block 

// const capatilizedString=(String )=>{
//     return String.charAt(0).toUpperCase() + String.slice(1);
// }

//export const firstname = "Wahid ";
//export const lastname = "Bux";

// Use * to import everything form a file 

//import * as capatilizedStrings from "./String_Function.js";

// improt a defualt export 

//import subtract  from "./String_Function.js";
//console.log(subtract(10,4))

//import addition from "./String_Function.js";
//console.log(addition(45,15));



