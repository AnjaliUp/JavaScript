const user = {
    username: "Anjali",
    price : 999,


    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "John"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username="anjali"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "anjali"
//     console.log(this.username);
// }

const chai = () => {
    let username = "anjali"
    console.log(this.username);
}

// chai()

// 

// const addTwo = (num1,num2) =>  num1 + num2
// const addTwo = (num1,num2) =>  (num1 + num2)

const addTwo= (num1,num2)=>({username:"anjali"})



console.log(addTwo(3,5));