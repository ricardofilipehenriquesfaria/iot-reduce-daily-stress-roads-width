var mysql = require('mysql');
var wait = require('wait-for-stuff');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'roads_data',
});

module.exports = {
	getFunchalRoadsData: function(request_module){
		connection.query("SELECT * from funchal_roads WHERE toponimo NOT LIKE ''", function(err, results, fields) {

			console.log('Número de Registos: ' + results.length);
	
			for (var i in results) {
				request_module.getBoundingBoxes(connection, results[i].toponimo, results[i].id);
				wait.for.time(10);	
			}	
		});
	}		
}




