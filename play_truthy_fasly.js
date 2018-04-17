// https://www.sitepoint.com/javascript-truthy-falsy/

let x;
x = 1;   // x is a number
x = '1'; // x is a string
x = [1]; // x is an array

let y;

// all true
1 == '1';
1 == [1];
'1' == [1];

// all false
1 === '1';
1 === [1];
'1' === [1];

// all true
false == 0;
0 == '';
null == undefined;
[] == false;
!![0] == true;

// all false
false == null;
NaN == NaN;
Infinity == true;
[] == true;
[0] == true;

// instead of
if (x == false) {} // ...
// runs if x is false, 0, '', or []
// use
if (!x) {} // ...
// runs if x is false, 0, '', NaN, null or undefined

// instead of
if (x == y) {} // ...
// runs if x and y are both truthy or both falsy
// e.g. x = null and y = undefined
// use
if (x === y) {} // ...
// runs if x and y are identical...
// except when both are NaN

// instead of
if (x === y) // ...
// runs if x and y are identical...
// except when both are NaN
// use
if (!!x === !!y) {} // ...
// runs if x and y are identical...
// including when either or both are NaN