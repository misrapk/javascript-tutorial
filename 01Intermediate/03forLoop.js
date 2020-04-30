const days = ['Mon', 'Tue', 'Wed','Thr','Fri','Sat']


for (let index = 0; index < days.length; index++) {
    const element = days[index];
    console.log(element);
    
}
console.log("Opposite of days")
for(let index = days.length-1; index>=0; index--){
	console.log(days[index]);
}