function dummyHello(): string {
	return 'Hello World';
}

test(`"hello world" is returned`, () => {
	expect(dummyHello()).toBe('Hello World');
});
