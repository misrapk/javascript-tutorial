// alert('connected')

function myValidation(){
	let myValue = document.getElementById('myForm').value;

	if (isNaN(myValue) || myValue < 1 || myValue > 20) {
		console.log('NOt a Valid Input!')
		const myChangeElement = document.querySelector('p')
		myChangeElement.textContent = 'Not a Valid Input'
	}
	else {
		console.log("Valid Input")
		document.getElementById('idone').textContent = 'Valid Input'
	}
}


//form validation

document.querySelector('.myForm').addEventListener('submit', (event) =>{
	

	console.log(event.target.username.value);
	console.log(event.target.realname.value);
	event.target.username.value='';
	event.target.realname.value='';


})

//password Checker
function pswrdCheck(){
	let firstPass = document.getElementById('mypas').value;
	let repass = document.getElementById('repas').value;

	if(firstPass == repass){
		console.log("Valid Password")
	}else {
		console.log("Invalid Passwrod")
	}
}