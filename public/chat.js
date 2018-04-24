//Make Connection

var socket = io.connect()

//Query Dom 
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

btn.addEventListener('click',function(){
	socket.emit('chat',{
		handle: handle.value,
		message: message.value
	});
});


//Listen 
socket.on('chat',function(data){
	output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'; 
})

