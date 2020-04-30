// functions part II

//defualt parameters = when we dont pass arguments in 
// function call then default values are used

let myMultiplier = function(num1, num2){
	return num1*num2
}

console.log(myMultiplier(3,4))



let sample = function(name = 'unName', marks =0){
	return 'Hello ' + name + ' and your marks is : ' + marks
}

console.log(sample('Peeyush',20))