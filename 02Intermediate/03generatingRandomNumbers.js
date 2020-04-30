//numbers
//generating random numbers
/* but first talk about numbers
	
	refer documentation : numbers js mdn
*/


let numOne = 23
let numTwo = 8

// console.log(22/7)    //return 3.142857142857143  a ver long number

result = 22/7
// console.log(result.toFixed());


/*for generating random numbers 
refer ==> math js mdn

*/

let floatRes = result.toFixed(2);
// console.log(Math.floor(floatRes));

//floor brings down every floating value to botoom  3.4 --> 3
//ceil brings up every floating number to upper  3.4 --> 4

/*Math.random()*i --> generate random numbers between 0 and i
  Math.floor(Math.random() *(i-j + 1)) + j --> generate random between i and j (i>j)

*/
// console.log(Math.random() *10);


// make the dice app

let upper = 6
let lower = 1

let myRandom = Math.floor(Math.random() * (upper-lower + 1)) + lower;
console.log(myRandom)