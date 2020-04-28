// // scope.js
// //difference between let and var

// /* scope of 'let' is only inside the bloc
// while 'var ' can deal with it 
// */


// let iAmGlobal = 'some value'
// if(true){
// 	// let iAmLocal = 'local memory'
// 	var iAmLocal = 'local mem'
// 	iAmGlobal = 'helo'
// 	console.log(iAmGlobal);
// 	console.log(iAmLocal)
// }

// console.log(iAmLocal)
// console.log(iAmGlobal)





//Kings Problem
// let king = 'John'
if(true) {
	// let king = 'Sam'
	if(true){
		let king = 'Ram';
		console.log(king);      // in js if we dont declare the variable then it will automatically declared as global
	}
}

if(true){
	console.log(" i am secoond part : " + king);
}