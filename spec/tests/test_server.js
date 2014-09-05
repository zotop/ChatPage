var socketURL = 'http://localhost:5000';

var options ={
  transports: ['websocket'],
  'force new connection': true
};

var chatUser1 = {'name':'Tom'};
var chatUser2 = {'name':'Sally'};
var chatUser3 = {'name':'Dana'};
  
describe("Chat Server",function(){

  /* Test 1 - A Single User */
  it('Should broadcast new user once they connect',function(done){
  	var socket = io('http://localhost:5000');
    
    socket.on('connect', function () { // TIP: you can avoid listening on `connect` and listen on events directly too!
     socket.emit('connection name', chatUser2);
      
    });
    

      
    done();
    });
   
  
});