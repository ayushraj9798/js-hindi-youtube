//  for of

// ["" , "" , ""]
// [{} , {} , {}]

const arr = [1 , 2 , 3 , 4 , 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(greet);
    
}

//  Maps   :-   Maps are known for unique value

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"INDIA")

// console.log(map);

for (const key of map) {
    // console.log(key);
    
}
for (const [key, value] of map) {
    // console.log(key,':-', value);
    
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
// for (const [key, value] of myObj) {       //object cannot be iterable(error)
//     console.log(key,':-', value);
// }