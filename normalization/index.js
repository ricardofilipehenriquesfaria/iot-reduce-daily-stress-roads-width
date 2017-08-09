var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'roads_data',
});

connection.query("SELECT * from funchal_roads WHERE toponimo NOT LIKE ''", function(err, results, fields) {

	console.log('Número de Registos: ' + results.length);
	
	for (var i = 0; i < results.length; i++){	
		var categoria = results[i].categoria;
		
		
		if(results[i].toponimo.indexOf("Vr ") != -1 && categoria.toString().trim() === "Vereda"){
			var toponimo = results[i].toponimo.replace("Vr ", 'Vereda ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			}); 
		}
		else if(results[i].toponimo.indexOf("Tv ") != -1 && categoria.toString().trim() === "Travessa"){
			var toponimo = results[i].toponimo.replace("Tv ", 'Travessa ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				if (err) console.log(err);
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Rot ") != -1 && categoria.toString().trim() === "Rotunda"){
			var toponimo = results[i].toponimo.replace("Rot ", 'Rotunda ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			}); 
		}
		else if(results[i].toponimo.indexOf("Rp ") != -1 && categoria.toString().trim() === "Rampa"){
			var toponimo = results[i].toponimo.replace("Rp ", 'Rampa ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Pc ") != -1 && categoria.toString().trim() === "Praca"){
			var toponimo = results[i].toponimo.replace("Pc ", 'Praça ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "', categoria = 'Praça' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("P ") != -1 && categoria.toString().trim() === "Ponte"){
			var toponimo = results[i].toponimo.replace("P ", 'Ponte ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Pas ") != -1 && categoria.toString().trim() === "Passeio"){
			var toponimo = results[i].toponimo.replace("Pas ", 'Passeio ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Lev ") != -1 && categoria.toString().trim() === "Levada"){
			var toponimo = results[i].toponimo.replace("Lev ", 'Levada ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Lg ") != -1 && categoria.toString().trim() === "Largo"){
			var toponimo = results[i].toponimo.replace("Lg ", 'Largo ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Lad ") != -1 && categoria.toString().trim() === "Ladeira"){
			var toponimo = results[i].toponimo.replace("Lad ", 'Ladeira ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Ips ") != -1 && categoria.toString().trim() === "Impasse"){
			var toponimo = results[i].toponimo.replace("Ips ", 'Impasse ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Est ") != -1 && categoria.toString().trim() === "Estrada"){
			var toponimo = results[i].toponimo.replace("Est ", 'Estrada ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if((results[i].toponimo.indexOf("Escd ") != -1 || results[i].toponimo.indexOf("Esc ") != -1) && categoria.toString().trim() === "Escadinhas"){
			var toponimo = "";
			if(results[i].toponimo.indexOf("Escd ") != -1){
				toponimo = results[i].toponimo.replace("Escd ", 'Escadinhas ');
				if(toponimo.indexOf("'") != -1){
					toponimo = toponimo.replace(/'/g, ' ');
				}
			} else {
				if(toponimo.indexOf("'") != -1){
					toponimo = toponimo.replace(/'/g, ' ');
				}
				toponimo = results[i].toponimo.replace("Esc ", 'Escadinhas ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Esc ") != -1 && categoria.toString().trim() === "Escadas"){
			var toponimo = results[i].toponimo.replace("Esc ", 'Escadas ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Ent ") != -1 && categoria.toString().trim() === "Entrada"){
			var toponimo = results[i].toponimo.replace("Ent ", 'Entrada ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Cam ") != -1 && categoria.toString().trim() === "Caminho"){
			var toponimo = results[i].toponimo.replace("Cam ", 'Caminho ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Cal ") != -1 && categoria.toString().trim() === "Calcada"){
			var toponimo = results[i].toponimo.replace("Cal ", 'Calçada ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "', categoria = 'Calçada' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Bc ") != -1 && categoria.toString().trim() === "Beco"){
			var toponimo = results[i].toponimo.replace("Bc ", 'Beco ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Ba ") != -1 && categoria.toString().trim() === "Bairro"){
			var toponimo = results[i].toponimo.replace("Ba ", 'Bairro ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Az ") != -1 && categoria.toString().trim() === "Azinhaga"){
			var toponimo = results[i].toponimo.replace("Az ", 'Azinhaga ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Av ") != -1 && categoria.toString().trim() === "Avenida"){
			var toponimo = results[i].toponimo.replace("Av ", 'Avenida ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
		else if(results[i].toponimo.indexOf("Alam ") != -1 && categoria.toString().trim() === "Alameda"){
			var toponimo = results[i].toponimo.replace("Alam ", 'Alameda ');
			if(toponimo.indexOf("'") != -1){
				toponimo = toponimo.replace(/'/g, ' ');
			}
			connection.query("UPDATE funchal_roads SET toponimo = '" + toponimo + "' WHERE id = '" + results[i].id + "'", function(err, result, fields) {
				console.log('[' + result.affectedRows + '] row');
			});
		}
	}
});


