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
		for (var i = 0; i <= 2344; i++){
			connection.query("SELECT * from funchal_roads WHERE toponimo NOT LIKE '' AND id = '" + i + "'", function(err, results, fields) {

				if (results != null) {
					if(results.length > 0){
						request_module.getBoundingBoxes(connection, results[0].toponimo, results[0].id);
					}
				}					
			});
			wait.for.time(30);	
		}
	}		
}




