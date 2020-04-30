//version 3

/*we will create a function in that we can directly pass
the number of meetings , instead of object and number
*/

let myTODOs = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){
        /* when u call 'this' anywhere inside the function
        it trying to refer the object in which the funciton is 
        defined
        console.log(this)
        */
        // console.log("I'am a function");
        // console.log(this)

        this.meetings = this.meetings+num
    },
    doneMeetings: function(num){
        this.meetDone = this.meetDone -num
    },
    summary: function(){
        return 'You have '+(this.meetings + this.meetDone)+' meetings left today'
    }
}

//we can directly callthe function in the TODO object
myTODOs.addMeeting(4)
myTODOs.doneMeetings(2)


console.log(myTODOs.summary())

