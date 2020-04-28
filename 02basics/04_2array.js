//3 main functions of arryas


const numbers = ['One','Two', 'Three', 'Four', 'Five', 'Six']


//start------>

// numbers.shift()  // It will remove the first element

// //or we can say it is shifted 

// console.log(numbers);

// // console.log(numbers.shift()); //print the first shifted elelment

// numbers.unshift('SOMETHING')//insert one more value at 0th index
// console.log(numbers);


//end------->

// numbers.pop()  //pop the last element

// console.log("dleted number is : " + numbers.pop());
console.log(numbers);

numbers.push('seven'); // insert the new value into array from back
console.log(numbers);

//middle

// --> splice(start: number, deleteCount: number, string: to insert)

numbers.splice(2, 1 , "SOMETHING")
console.log(numbers);