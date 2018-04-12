// JS present-env playground
console.log('====================================');
console.log("Hello world");
console.log('====================================');

// object rest spread operator
let {x,y,...z} = {x:1, y:2, a:3, b:4}

console.log(x);
console.log(y);
console.log(z);

let n = {x,y,...z} 

console.log(n);
