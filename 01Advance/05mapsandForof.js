//data type of js

var john ={
	name: 'Iam john',
	age: 24,
	isActive: true
}

var marry ={
	name: 'I am Marry',
	age: 21,
	isActive : true
}

var sam = {
	name: 'I am Sam',
	age: 28,
	isActive: false
}

/*
	use property of map to set data into them	
*/
let users = new Map();
// console.log(typeof users);    //return object

users.set('john',john)  //first john is Key(defined by us)
//second john is refernce to map variable at line 3

users.set('marry',marry) 
users.set('sam', sam)

// console.log(users)
// console.log(users.size)

// console.log(users.get('sam'))

// console.log(users.values());




/* for of
used to iterate through map
 */

for (const key of users.keys()){
	console.log(key);
}


for(const value of users.values()){
	console.log(value.name);
}



for (const [key, value] of users.entries()){
	console.log(key + ' = ' + value);
}




// users.forEach((key, value) => console.log(key + ' = ' + value));


//array of arrays
var arrofArr = [['one', '1'],['two','2'], ['three','3']]

var newMap = new Map(arrofArr)

console.log(newMap)

arrofArr.forEach((value,key) => console.log(key + ' = ' + value))

