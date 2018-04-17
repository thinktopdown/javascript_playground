// https://www.sitepoint.com/javascript-truthy-falsy/

let x;
x = 1;   // x is a number
x = '1'; // x is a string
x = [1]; // x is an array

// all true
1 == '1';
1 == [1];
'1' == [1];

// all false
1 === '1';
1 === [1];
'1' === [1];