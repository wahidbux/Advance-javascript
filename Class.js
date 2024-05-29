
//Classes in JavaScript are essentially a blueprint for creating objects, 
//allowing us to define properties and methods that will be shared by all instances of the class.

// Class syntax to define a constructor function 

function makeClassOf(){
    class Vegetable {
        constructor (name ){
            this.name=name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClassOf();
const carrot = new Vegetable("carrot");
console.log(carrot.name); 


// Using getters and setters to control access to an object
// Constructor is a member function of a class, whose name is the same as the class name 

function makeClass(){
  class Thormostat{
      constructor(temp){
        this.temp = 5/9 * (temp -32);
      }
      get tempreature(){
        return this.temp;
      }
      set tempreature(updateTemp){
        this.temp=updateTemp;
      }
  }
  return Thormostat;
}
const Thormostat = makeClass();
const thormos = new Thormostat(76);
let temp=thormos.tempreature;
thormos.tempreature=26;
temp=thormos.tempreature;
console.log(temp);
