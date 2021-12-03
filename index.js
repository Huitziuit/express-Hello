var  express = require('express');

var app = express();
const path = require('path')

app.get('/',function(req,res){
	//res.send('Hello World');
	res.sendFile(path.join(__dirname+'/html/index.html'));
});


app.get('/saludo', function (req, res) {
	res.send('Solicitud de saludo recibida');
});

app.listen(8000, function(){
	console.log('Servidor corriendo en el puerto 8000');
});
