// // alert('connected')

// localStorage.setItem('hero', 'Shaktimaan');
localStorage.setItem('todo', 'Make Tea')

var myHero = localStorage.getItem('hero');
console.log(myHero)

console.log(localStorage.getItem('todo'))



// update 
localStorage.setItem('todo', 'Record Youtbe Video');

//clear storage
localStorage.removeItem('hero')