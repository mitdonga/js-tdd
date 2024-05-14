function add(num_str) {
	let delimiter = new RegExp(',|\n');
	
	if (typeof num_str !== "string"){
		throw new Error("Wrong argument given to add func");
	} else if (num_str.startsWith("\n") || num_str.endsWith("\n")) {
		throw new Error("Invalid number string");
	} else if (num_str.startsWith("//")) {
		delimiter = getDelimiter(num_str);
		num_str = num_str.split(/\/\/\W\n/)[1];  // Removing delimiter format
	} else if (num_str.trim() === "") {
		return 0;
	}

	// converted string to numbers array
	let numbers = num_str.split(delimiter).map(e => Number(e));

	// sum numbers
	let sum = numbers.reduce((sum, e) => sum + e, 0);

	return sum;
}

// Match & Return delimiter using this format //[delimiter]\n[numbers…]
function getDelimiter(str) {
	let match = str.match(/^\/\/(.)\n/);
	if (match && match[1] !== null) {
		return new RegExp(match[1]);
	} else {
		throw new Error("Invalid delimiter, valid format: //[delimiter]\\n[numbers…]");
	}
}

module.exports = add;
