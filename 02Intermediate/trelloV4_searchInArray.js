//trello v4

/* introducing search feature
*/


const myTodos = ['Coding', 'Buy Bread', 'Exercise', 'Record Youtube Video']

// console.log(myTodos.indexOf('Buy Bread'));  //return the index of element
/*indexOf(x) ==> return the index of elelment in array
but if the element is not present then
it returns '-1'
*/

/*--------------------------------------------------------*/

//array with objects
const newTodos = [{
	title: 'Coding',
	isDone: false
} ,{
	title: 'Buy Bread',
	isDone: false
}, {
	title: 'Exercise',
	isDone: false
},{
	title: 'Record Youtube Video',
	isDone: false
}]


// const index = newTodos.findIndex(function(todo, index){
// 	return todo.title == 'Exercise'	
// })
// console.log(index);


//method 1
const findTodo = function(myTodos, title){
	const index = myTodos.findIndex(function(todo, index){
		return todo.title.toLowerCase() == title.toLowerCase()
		//this will search the value in lowerCase
	})
	return myTodos[index]

}

let printMe = findTodo(newTodos, 'Record Youtube video')
console.log(printMe)



//method 2
const findTodos = function(myTodos, title){
	const titleReturned =  myTodos.find(function(todo,index){
		return todo.title.toLowerCase() === title.toLowerCase()
	})
	return titleReturned
}

let printUs = findTodos(newTodos, 'Record Youtube Video')

console.log(printUs)