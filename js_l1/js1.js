function foundFunction(testString) {
	let newString = '';
	let numberSymbol = [];
	for (let i = 0; i < testString.length; i++) {
		if (testString[i] == '/') {
			numberSymbol.push(i)
		}
		else {
			newString = newString + testString[i]
		}
	}
	console.log("coun of symbols: " + numberSymbol.length);
	console.log("new string: " + newString);
}
