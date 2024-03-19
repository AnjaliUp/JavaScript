// Primitive Datatypes

// & types - String, number, boolean, null , undefined , Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null //(Completely empty not 0 even)
let userEmail;  // value is undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 34567799794860945n 


// Reference Types (Non - Primitive)

// Arrays, Object, Functions 

const heros = ["Superman" , "Nagraj", "Daniel"]
let myObj = {
    name: "Anjali",
    age: 21, 

}

const myFunction = function(){
    console.log("Hello World");

}

// console.log(typeof(bigNumber));
console.log(typeof(outsideTemp));

// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

 //    Stack (Primitive) makes copy and Heap(Non - primitive) memory create reference

 let myYoutubename = "upadhyayanjalidotcom"
 let anothername = myYoutubename
 anothername = "chaiaurcode"

 console.log(myYoutubename);
 console.log(anothername);

 let userOne={
    email : "user@google.com",
    upi : "uder@byl"
 }

 let userTwo = userOne 
 userTwo.email = "upadhyayanushka@gmail.com"
 console.log(userOne.email);
 console.log(userTwo.email);




