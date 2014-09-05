var socketURL = 'http://localhost:5000';

var options ={
  transports: ['websocket'],
  'force new connection': true
};

var userName1 = 'Hank';
  
describe("Chat Server",function(){

  it('should send ack when user connects',function(done){
  	var client1 = io.connect(socketURL);
    client1.on('connect', function () { 
    
      client1.on('user:connected', function(userName) {
        expect('Hank').to.equal(userName);
        client1.disconnect();  
        done();
      });
      
    });

    client1.emit('user:connect', userName1); 
    
  });
   
  
});