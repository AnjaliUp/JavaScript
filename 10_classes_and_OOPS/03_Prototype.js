let myName = "Anjali   ";
let mychannel = "chai     ";

console.log(myName.length);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.anjali = function () {
  console.log("Anjali is present in all objects");
};

// heroPower.anjali()
myHeros.anjali();

Array.prototype.heyAnjali = function () {
  console.log("Anjali says hello");
};

myHeros.anjali();
myHeros.heyAnjali();
// heroPower.heyAnjali(); - Error(heyAnjali works only with array)


// Inheritance 

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User; // Inheritance

// modern syntax of inheritance
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"anjali  ".trueLength();
"iceTea".trueLength();