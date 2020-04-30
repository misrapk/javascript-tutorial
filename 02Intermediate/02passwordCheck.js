//username and password checking
///we will learn about strings also

let userEmail = 'letsCode123'    //not allowed
let password = '1234letsCode'     //not allowed


//use documentation --> MDN
// console.log(password.length);
// console.log(userEmail.toUpperCase());
// console.log(userEmail.trim()); //trim whitespaces from start and end


let userChecker = function(myString){
	//in user email I want some numbers
	if ((myString.includes(123)) && (myString.length > 6)){
		return true
	}
	return false
}

// console.log(userChecker('abc'));  //false
// console.log(userChecker(userEmail)); //true

// for password
let passChecker = function(pass){
	if((pass.includes(1234)) && (pass.length > 8)){
		return true
	}
	return false
}

// console.log(passChecker('1234pkm'));    ///return false

console.log(passChecker(password));