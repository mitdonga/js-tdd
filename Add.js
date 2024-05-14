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

	let numbers = [], neg_numbers = []
	
	// filtering positive numbers
	num_str.split(delimiter).forEach(e => {
		if (Number(e) < 0) neg_numbers.push(Number(e))
		else numbers.push(Number(e))
	});

	// throw error for negative numbers
	if (neg_numbers.length > 0) {
		throw new Error(`negative numbers not allowed ${neg_numbers.join(',')}`)
	}

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
