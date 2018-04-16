// http://exploringjs.com/es6/ch_destructuring.html

if (true) {
    let {first, last} = {first: "adam", last: "huda"}
    console.log(first)
    console.log(last)
}

if (true) {
    let {first: f, last: l} = {first: "adam", last: "huda"}
    console.log(f)
    console.log(l)
}

if (true) {
    let [first, second] = [1,2]
    console.log(first);
    console.log(second);
}
