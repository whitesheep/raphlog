var io = require('socket.io').listen(8081);
var tail = require('tailnative');

tail.start('/var/log/nginx/access.log', function(t){
    
    t.on('data', function(data){
    	io.sockets.emit('log', data);
    });
    
    t.on('error', function(){
        console.log('error');
    });
    
    t.on('end', function(){
        console.log('end');
    });
});