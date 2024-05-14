const add = require('./Add');

describe("Test Add func for simple string", () => {
	test('Empty string should return 0', () => {
		expect(add("")).toBe(0);
	});
	
	test('Single number should return that number', () => {
		expect(add("1")).toBe(1);
	});
	
	test('Two numbers should return their sum', () => {
		expect(add("1,5")).toBe(6);
	});
	
	test('Handle any amount of numbers', () => {
		expect(add("1,2,3,4,5")).toBe(15);
		expect(add("10, 20, 30")).toBe(60);
	});
})
