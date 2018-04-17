// 1. use const, let, then var

var x = 1
if(x) {
    var zGlobal = "zGlobal"
}
console.log(zGlobal)

function varTest() {
    let y = 1; 
    for (let i=0;i<10;i++) {
        let z = 123;
        var zFunctionScoped = "zFunctionScoped"
    }
    // z is block scoped above
    // console.log(z)
    // zFunctionScoped is function scoped 
    console.log(zFunctionScoped)
}

console.log(x)
// y is not defined
//console.log(y)
// zFunctionScoped is not available here
//console.log(zFunctionScoped)

varTest() 

// const arrays are still mutable
if (1 === 1) {
    const arrayTest = [1,2]
    // can't assign to empty array to const
    // arrayTest = []

    // but you can still splice it... DOH!!!
    arrayTest.splice(0,arrayTest.length)
    arrayTest.push(1,2)

    // concat with method or ...
    console.log(arrayTest)
    let newArray = arrayTest.concat(3)
    console.log(newArray)
    newArray = [...arrayTest, 3]
    console.log(newArray)
    newArray = [0, ...arrayTest]
    console.log(newArray)
}
