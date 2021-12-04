var  express = require('express');

var app = express();
const path = require('path')

const fs= require('fs')

app.use(express.json());		//POST
app.use(express.urlencoded());	//POST


app.get('/',function(req,res){
	//res.send('Hello World');
	res.sendFile(path.join(__dirname+'/html/index.html'));
});


app.get('/saludo', function (req, res) {
	res.send('Solicitud de saludo recibida');
});

app.post('/respuesta',(req,res)=>{
	if (req.body.file=="Y"){
		fs.writeFileSync('archivoDeNombres.txt', "Hola "+ req.body.nombre);
		var informacion = fs.readFileSync('archivoDeNombres.txt', 'utf8');
		res.send("Esto es lo que dice el archivo guardado : " + informacion)	
		console.log("dfsf "+informacion)
	}else {
		fs.unlinkSync('archivoDeNombres.txt');
		res.send("Cualquier archivo que existiece se borro: " +req.body.nombre)
	}
})

app.listen(8000, function(){
	console.log('Servidor corriendo en el puerto 8000');
});
