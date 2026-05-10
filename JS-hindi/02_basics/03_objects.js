// singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",// we cannot access this with dot

    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"] 
}

// console.log(jsUser.email); // OR 
//  console.log(jsUser[email]);// (error)this is also a way to access object but something is not right in this,we have to take the email as string
// console.log(jsUser["email"]);

// console.log(jsUser.full name);//error
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "hitesh@chatgpt.com"
//  Object.freeze(jsUser)
jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");

}
// console.log(jsUser.greeting);
// console.log(jsUser.greeting());


jsUser.greeting2 = function(){
    console.log(`Hello js user ,${this.name}`);

}
console.log(jsUser.greeting2);
console.log(jsUser.greeting2());

