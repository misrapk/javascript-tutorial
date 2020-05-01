//arrow
/*
	we can convert any function into ARROW FUNCTION
	Syntax: 
	const funName = (param) =>{
		//body
	}

	OR

	const funName = (parameter) => 'what you want to return'
*/

// const sayHello = function (name){
// 	return 'HelloWorld !' + name + ' Welcome'
// }
// console.log(sayHello("Rohit"))

const sayHello1 = (name) =>{
	return "hello " + name
}

//or

const sayHello = (name) => 'hey there ' + name

console.log(sayHello('Peeyush'));


//whenever there is a call back we can use arrow funciton

const todos = [{
	title: 'Buy bread',
	isDone: true
},{
	title: 'programming',
	isDone: false
},{
	title: 'Record video',
	isDone: true
}]

//we want only those todos whihc are done
//we use 'filter' --> return only those which fulfil the condition
const thingsDone = todos.filter((todos) => todos.isDone === true )  //=== compare the objects

console.log(thingsDone)


// Assignment

const myTodo = [{
	title: 'programming',
	isDone: true
},{
	title: 'buy Vegetables',
	isDone: false
},{
	title: 'Read Books',
	isDone: false
},{
	title: 'Play Cricket',
	isDone: true
},{
	title: 'Watch Movies',
	isDone: false
},{
	title: 'Record Video',
	isDone: true
}]


const remainWork = myTodo.filter((todo) => todo.isDone===false).forEach(todo=>console.log(todo.title))

console.log(remainWork)