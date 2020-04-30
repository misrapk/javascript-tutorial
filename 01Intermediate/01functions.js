//functions in js

/*
let funName = function(param1, param2....paramnn){
	body
}

*/
let funWithParam= function(){
	console.log("Hello");
}

//call
funWithParam();

//function with parameter
let sayHello = function (name){
	console.log("MEssage from sayHEllo function");
	console.log('HEllo dear ' + name);
}

//call the function
sayHello('John');


//funciton to make a fulll name
let fullNameMaker = function(firstName, lastName){
	console.log("Welcome");
	console.log('Happy to have you , '+ firstName + ' '+ lastName);
}
//call
fullNameMaker('Peeyush', 'Misra');



//adding two number
let myAdder = function(num1, num2){
	let added = num1 + num2
	return added
}

//call
let result = myAdder(2,3)
console.log(result);