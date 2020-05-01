// take input in $ and convert in rupees

const convertToRs = (dollar) => {
	if(typeof dollar === 'number'){
		return dollar*70
	}
	else{
		throw Error('Amount needs to be in number')
	
}

// const myValue = convertToRs(5)
// const myValue = convertToRs(5)

// console.log(myValue);

try{
	const myValue = convertToRs(4)
	console.log(myValue);
}
	catch(error){
		console.log(error)
	}
}