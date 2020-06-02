// // console.log(document.head);  //access head
// // console.log(document.body);  //access body


// // console.log(document.title);
// // console.log(document.width);


// //1. change the title of the html doc
// document.title = 'I got Changed'  //It willl change the title


// //2. Change 
// console.log(document.getElementById("idone"));
// console.log(document.getElementByClassName("classOne"));

// another way of selecting doc

// const myElement =  document.querySelctor()


//3. How to change content of <p>
// const myElements = document.querySelector('p')
// // console.log(myElements)
// myElements.textContent = 'Hey you changed me using js'

//using loop
const myElements = document.querySelectorAll('p')
myElements.forEach(function(p){
	p.textContent = 'I am chnaged using JS'
})


const myNewPara = document.createElement('p')
myNewPara.textContent = "I was Added via JS."
document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click', (event)=>{
	event.target.textContent="I was Clicked";
})

// track form input
document.querySelector('#myForm').addEventListener('input', (event)=>{
    console.log(event.target.value);
})