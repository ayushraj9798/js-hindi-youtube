//Primitive :-

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

//const bigNumber = 3456786775765656675n

// Reference(Non primitive) :-

// Array , Objects , Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name : "Ayush",
    age : 20,
}

const MyFunction =  function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
console.log(typeof MyFunction);
// console.log(typeof anotherId);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-primmitive)

let myYoutubename = "hiteshchaudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo =userOne

userTwo.email = "hitesh@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email);


