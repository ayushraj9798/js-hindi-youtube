const accountId = 144553
let accountEmail = "Ayush@google.com"
var accountPassword = "12345"
accountCity = "Siwan"
let accountState

// accountId = 2 // not allowed

accountEmail = "Ayush123@google.com"
accountPassword = "54321"
accountCity = "Gopalganj" 

// console.log(accountId);

/*
prefer not to use var because of issue
 in block scope and functional scope
 */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])