// 1. use const, let, then var

var x = 1
if(x) {
    var zGlobal = "zGlobal"
}
console.log(zGlobal)

function vartest() {
    let y = 1; 
    for (let i=0;i<10;i++) {
        let z = 123;
        var zFunctionScoped = "zFunctionScoped"
    }
    // z is blockscoped above
    // console.log(z)
    // zFunctionScoped is function scoped 
    console.log(zFunctionScoped)
}

console.log(x)
// y is not defined
//console.log(y)
// zFunctionScoped is not available here
//console.log(zFunctionScoped)

vartest() 

// const arrays are still mutable
if (1 === 1) {
    const arraytest = [1,2]
    // can't assing to empty array to const
    // arraytest = []

    // but you can still splice it... DOH!!!
    arraytest.splice(0,arraytest.length)
    arraytest.push(1,2)

    // concat with method or ...
    console.log(arraytest)
    let newArray = arraytest.concat(3)
    console.log(newArray)
    newArray = [...arraytest, 3]
    console.log(newArray)
    newArray = [0, ...arraytest]
    console.log(newArray)
}
