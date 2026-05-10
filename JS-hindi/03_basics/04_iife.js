//Immediately Invoked Function Expressions(IIFE)

(function chai(){  //named IIFE
    console.log(`DB CONNECTED`);
    
})();          //here semicolon is necessary bcz of  consecutive IIFEs

(() => {
    console.log(`DB CONNECTED TWO`);
    
}) ();         // //here semicolon is necessary bcz of  consecutive IIFEs


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
}) ('hitesh')


