/*
	coercion: js predict things for you automaticaly
	strings + num    can give the unpredictable answer
*/

// console.log('5' - 5); //it will give 0 to u

// console.log('5'+5); //here it will give 55

const giveType = typeof '5'

// console.log(giveType)  //give string

const adder = true + 5
// console.log(adder)   // return 6 (1+5)


const loginDetails = []

//logic for getting details from DB

const loginID = loginDetails[0]

// write logic for loginID
if(loginID !== undefined){
	console.log('allow to login')
}else{
	console.log("authentication Failed!")
}


//values that interpret as false:
/*false
0
''
null
undefined
*/

//therefor
if(loginDetails){
	console.log('allowed')
}else{
	console.log("not Allowed")
}
