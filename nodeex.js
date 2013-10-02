var express = require('express'),
    http = require('http');

var app = express();
var server = http.createServer(app).listen(8080);

var io = require('socket.io').listen(server);
app.use(express.static(__dirname + '/'));
app.get('/',function(req,res){
	res.sendfile('index.html');
});
io.sockets.on('connection',function(socket){
	socket.on('hit-event',function (data) {
		console.log(data);
		socket.emit('display',data);
	});

});