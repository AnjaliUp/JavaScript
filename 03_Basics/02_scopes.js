// let a = 10
// const b = 20
// var c = 30

// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}

// for(let i = 0; i<arr.length;i++){
//     const element = arr[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username= "anjali"

    function two(){
        const website = "Youtube"
        // console.log(username);
    }

    // console.log(website);

    two()
}

one()

if(true){
    const username = "anjali"
    if(username==="anjali"){
        const website = " youtube"
        // console.log(username + website);
    }

    // console.log(website);  // Gives Error
}

// console.log(username); // Gives error because we're accessing it out of the scope


//++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++++++++//
console.log(addone(5));

function addone(num){
    return num + 1

}


const addTwo = function(num){
    return num+2
}

console.log(addTwo(5));