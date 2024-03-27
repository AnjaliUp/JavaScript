

function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("A");
    console.log("L");
    console.log("I");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)
// console.log("Result: " , result);

addTwoNumbers(3,4)

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Anjali"))
// console.log(loginUserMessage())


function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200,400,500));

const user = {
    username:"Anjali",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]

}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));

