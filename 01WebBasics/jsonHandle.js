//object
//json file
const student ={
	name: 'Rahul',
	age: 21,
	isActive: true
}

//how to convert json object into string to be stored in local storage
const studentObjToString = JSON.stringify(student)

console.log(typeof(studentObjToString));  //print 'string' on console

localStorage.setItem('student', studentObjToString);


//lets convert string back to json
const toJSONStudent = JSON.parse(studentObjToString);
console.log(typeof(toJSONStudent));