//trello version2

///create object
let myTODOs = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0
}


//TODO: call objet
let addMeeting = function(todo,meet=0){
    todo.meetings = todo.meetings + meet
}

/* in js if we pass the object in a function then 
the original object is passed not the 
COPY of object.
SO whatever the changes you made it will affect the 
original object
*/
let meetDone = function(todo, meet =0){
    todo.meetDone = todo.meetDone-1
}

let resetDay = function(todo){
    todo.meetings = 0
    todo.meetDone = 0
}

let getSummary = function(todo){
    let remainingMeet = todo.meetings + todo.meetDone
    return 'You have ' +remainingMeet +' meetings left today!'

}

addMeeting(myTODOs, 4);
addMeeting(myTODOs, 2);

meetDone(myTODOs, 5);

console.log(myTODOs)
console.log(getSummary(myTODOs));