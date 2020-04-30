//objects

//the objects are useful in creating APIs`

// lets call an object 'youtube'
/*
	--> objects is made up of keys and values{key: value}
	--> use the commas after every key value pair
*/
//first object -- declaration
let myYoutubeVideo={
	title: 'Dynamic Programming',
	videoLength: '15',
	videoDescription: 'a introductory video of DP.',
	videoCreator: 'Peeyush K Misra'
}

//accessing objects
console.log(myYoutubeVideo);     ///give the full objects value

//for accessing particular value

console.log('Hey new Video on ' + myYoutubeVideo.title + ' by '+myYoutubeVideo.videoCreator);