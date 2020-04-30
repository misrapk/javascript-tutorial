//=== vs == in js

/*
== equality    -- checks for the value's equality
=== identity  -- checks for the objects in the memory
					whether it is equal or not
*/

let myVar = ''
let myVarTwo = ''

console.log(myVar === myVarTwo); //return true
//but
let var1 = {}
let var2 = {}
console.log(var1 === var2);  //return falase because var1 and var2 are objects
