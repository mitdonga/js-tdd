function add(num_str) {
	console.log(typeof num_str)
	if (typeof num_str !== "string"){
		throw new Error("Wrong argument given to add func");
	} else if (num_str.startsWith("\n") || num_str.endsWith("\n")) {
		throw new Error("Invalid number string");
	} else if (num_str.trim() === "") {
		return 0;
	}

	// converted string to numbers array
	let numbers = num_str.split(/,|\n/).map(e => Number(e));

	// sum numbers
	let sum = numbers.reduce((sum, e) => sum + e, 0);

	return sum;
}

module.exports = add;
