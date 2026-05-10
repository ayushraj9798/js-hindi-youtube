
// var c = 300
let a = 300

if(true){                  //block scope
let a = 10
const b = 20
// console.log("INNER : ", a);

}


// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); 
        
    }
    // console.log(website);//error

    two()
    
}
one()


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);//error
}

// console.log(username);//error




// +++++++++++++++++++++++++++++++++++++++INTERESTING+++++++++++++++++++++++++++++++++++++++++++++

// console.log(addone(5))

function addone(num){
    return num + 1
}


// console.log(addTwo(5))//error

const addTwo = function(num){
    return num + 2
}

