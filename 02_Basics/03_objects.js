// Singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser ={
    name:"Anjali", 
    "full name" : "Anjali Upadhyay",
    [mySym]:"mykey1",
    age:21,
    location:"Udaipur",
    email: "anjaliupadhyay@gmail.com",
    isLoggedIn: false,
    lastLoginDays :["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

//Changing email
JsUser.email= "anjaliupadhyay@yahoo.com"
// Object.freeze(JsUser) // Cant be changed after freeze method
JsUser.email="anushkaupadhyay@gmail.com"
// console.log(JsUser);   // Email not changed after the freeze operation

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

