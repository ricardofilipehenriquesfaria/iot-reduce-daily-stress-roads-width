var mysql = require('mysql');
var request = require('request');
var sleepms = require('sleep-ms');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'roads_data',
});

connection.query("SELECT * from funchal_roads WHERE toponimo NOT LIKE ''", function(err, results, fields) {

	console.log('Número de Registos: ' + results.length);
	
	for (var i in results) {
		
		var id = results[i].id;
		var url = "http://nominatim.openstreetmap.org/search?q=" + results[i].toponimo + ",Funchal,Madeira&format=json&polygon=1&addressdetails=1";
		
		request({url: url, json: true}, function (err, res, json){
			
			if (err) {
				throw err;
			}
			
			for(var j = 0; j < json.length; j++){
				
				var southLatitude = 0;
				var northLatitude = 0;
				var westLongitude = 0;
				var eastLongitude = 0;
				
				if (json[j].hasOwnProperty('boundingbox')){
					
					for(var k = 0; k < json[j].boundingbox.length; k++){
						
						if(k == 0){
							southLatitude = json[j].boundingbox[k];
						}
						if(k == 1){
							northLatitude = json[j].boundingbox[k];
						}
						if(k == 2){
							westLongitude = json[j].boundingbox[k];
						}
						if(k == 3){
							eastLongitude = json[j].boundingbox[k];
						}
					}
					
					var write = "INSERT INTO bounding_boxes (id_funchal_roads, southLatitude, northLatitude, westLongitude, eastLongitude) VALUES ('" + id
							+ "','" + southLatitude
							+ "','" + northLatitude 
							+ "','" + westLongitude 
							+ "','" + eastLongitude + "')";
				
					console.log(write);
					
					connection.query(write, function(err, result, fields) {
						console.log("Nova BoundingBox: " + result.insertId);
					});
				}	
			}
		});
		sleepms(10000);
	}
});
