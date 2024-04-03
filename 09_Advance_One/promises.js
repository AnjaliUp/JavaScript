//  A Promise is an object representing the eventual completion or failure of an asynchronous operation. 

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task 
    // DB calls, cryptography , network calls
    setTimeout(function(){
        console.log('Asyc task is complete');
    },1000)
});

promiseOne.then(function(){
    console.log("Promise Consumed");

})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Anjali", email: "anjaliupadhyay@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "anjali", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour       // For better code readability use then in the new line 
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
 // Finally executes always 


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


// Same function but using try and catch block for error handling 
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
              
           // Data comes here in string format we are changing it to the json format below 
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


// fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.
// It   only rejects when a network error is encountered
// A fetch() promise doesnt reject on HTTP errors(404, etc). Instead, a then() handler must check the Response.ok properties




fetch('https://github.com/AnjaliUp')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.