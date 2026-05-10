// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");


// function sayMyName(){
// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");
// }

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1,number2){
//    let result = number1 + number2
//    return result

    return number1 + number2
}
 const result = addTwoNumbers(3,5)

//  console.log("Result :", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`

}

console.log(loginUserMessage()); //undefined just logged in
// console.log(loginUserMessage("hitesh"));

// function calculateCartPrice( ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,500,2000));


// function calculateCartPrice2(val1,val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice2(200,400,500,2000));

const user = {
    username : "hitesh",
    price : 199
}
function handleObject(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
    
}

// handleObject(user)

function handleObject2(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject2({
//     username : "Ayush",
//     price : 200
// })
 

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([100,200,400,500]));