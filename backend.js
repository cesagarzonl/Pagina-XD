'use strict'

var http = require("http");
var fs = require("fs");
var path = require("path")
var router = require("./xx")
var port = process.env.PORT || 8080
var server = http.createServer()

server.on("request", router)
server.on('listening', onListening)

server.listen(port)


function onListening () {
	console.log("Server running in port " + port )
}


/*var pepito = "Colombia";
var basededatos = {	
		ID:"cesar",
		password:"andrea"
 };
console.log("arrancando server de Node" );

var express = require("express");
var parcero = require("body-parser");
var Web = express();
Web.use( parcero.urlencoded() );
var servidor;

servidor = Web.listen(8080, function (){
	console.log("Servidor  arrancando :D ")
 });
Web.get("/", function (req, res) {

	res.sendfile("pagina.css" && "pagina.html" 	);
 });



	Web.post("/entrar", function (req,res){  
		//res.send("en hora buena has entrado a tu cuenta ")
		//console,log(req);
	//s.send("entraste al formularios")
		if(req.body.usuario == basededatos.ID && req.body.clave == basededatos.password)
		{
			res.send("lo lograste encontraste la contraseña");
		}
		else
		{
				res.send("andrea no se sabe mi clave");
			//res.sendfile("formulario.html");
		}	
	});*/

