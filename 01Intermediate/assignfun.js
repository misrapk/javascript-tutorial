
// assginfun

let getMyGrade = function(currentMarks, totalMarks){
	let myPrecent = (currentMarks/totalMarks)*100

	let myGrade = ''  //initialize with empty

	if(myPercent >= 90){
		myGrade = 'A'
	}else if(myPercent>=80){
		myGrade = 'B'
	}
	else if (myPercent >=70){
		myGrade = 'C'
	}

	else {
		myGrade = 'F (Fail class)';
	}

	return 'Your grade is '+myGrade+' and percentage it ' + myPercent


}


let yourResult = myGrades(92,100);
console.log(youResult);