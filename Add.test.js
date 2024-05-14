const add = require("./Add");

describe("Test Add func for simple string", () => {
	test("Does add function exist?", () => {
		expect(typeof add).toBe(typeof Function)
	})

	test("Wrong argument", () => {
		expect(() => add(100)).toThrow("Wrong argument given to add func");
		expect(() => add("100")).not.toThrow("Wrong argument given to add func");
	});

	test("Empty string should return 0", () => {
		expect(add("")).toBe(0);
	});
	
	test("Single number should return that number", () => {
		expect(add("1")).toBe(1);
	});
	
	test("Two numbers should return their sum", () => {
		expect(add("1,5")).toBe(6);
	});
	
	test("Handle any amount of numbers", () => {
		expect(add("1,2,3,4,5")).toBe(15);
		expect(add("10, 20, 30")).toBe(60);
	});
})

describe("Test Add func for string with \n", () => {
	test("Check invalid \n", () => {
		const error = "Invalid number string"
		expect(() => add("1,\n")).toThrow(error);
		expect(() => add("\n 10, 20")).toThrow(error);
		expect(() => add("1\n 10,20")).not.toThrow(error);
	});

	test("Handle lines between numbers", () => {
		expect(add("1\n2,3")).toBe(6);
		expect(add("10\n 20 ,20,\n 20,30")).toBe(100);
	});
})