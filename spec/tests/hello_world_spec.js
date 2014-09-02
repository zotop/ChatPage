describe('hello_world', function() {
  it('return a "Hello world"', function(done) {
   expect('Hello world').to.equal(sayHelloWorld());
   done();
  }); 
});