var mysql = require('mysql');
var requestify = require('requestify'); 

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'roads_data',
});

connection.query("SELECT * from funchal_roads WHERE toponimo NOT LIKE ''", function(err, results, fields) {

	console.log('Número de Registos: ' + results.length);
	
	for (var i in results) {
		var url = "http://nominatim.openstreetmap.org/search?q=" + results[i].toponimo + ",Funchal,Madeira&format=json&polygon=1&addressdetails=1";
		requestify.get(url).then(function(response) {
			console.log(response.getBody());
		});
	};
});
	