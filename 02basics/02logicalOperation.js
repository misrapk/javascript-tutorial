
let isVarified = true
let isLoggedIn = true
let hasPayementToken = true
let isGuest = true

if(isVarified && isLoggedIn && hasPayementToken){
	console.log('Greetin message to users.')
	console.log('Welcome')
} else if(isVarified || isGuest){
	console.log('Welcome varified guest')
}