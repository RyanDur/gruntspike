describe("Object", function() {
	var obj = Object;

	beforeEach(function(){
		spyOn(Object, 'init').andCallThrough();
	});

	it("should be able to be invoked", function(){
		expect(obj.init).toBeDefined();
	});

	it("should be able to append stringds", function() {
		expect(obj.append("hello", "world")).toEqual("hello world");
	});
});