const accountId = 144553
let accountEmail = "upadhyayanjali@gmail.com"
var accountPassword  = "12345"
accountCity = "Jaipur"

// accountId = 2   // Not allowed already accountId value is assigned we can't change it
console.log(accountId);

accountEmail = "hchc@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);

/* Prefer not to use var because of issue in 
block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])