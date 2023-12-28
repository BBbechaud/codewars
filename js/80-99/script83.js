// Codewars Challenge 83 (Level 7kyu): Hit Count

// The function will take one argument which will be a four character string representing hit count
// The function must return a multi-dimensional array containing four inner arrays
// The final value in each inner array must be the actual value to be displayed
// Values returned in the array must be of the type number
// Examples

// counterEffect("1250") // [[0,1],[0,1,2],[0,1,2,3,4,5],[0]] 
// counterEffect("0050") // [[0],[0],[0,1,2,3,4,5],[0]] 
// counterEffect("0000") // [[0],[0],[0],[0]]

function counterEffect(str) {
	let result = [];
	for (let i = 0; i < str.length; i++) {
		let innerArrays = [];
		for (let j = 0; j <= Number(str[i]); j++) {
			innerArrays.push(j);
		} result.push(innerArrays);
	} return result;
}