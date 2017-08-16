var request = require('request');

module.exports = {
	getBoundingBoxes: function(connection, toponimo, id){
		
		var url = encodeURI("http://nominatim.openstreetmap.org/search?q=" + toponimo + ",Madeira&format=json&polygon=1&addressdetails=1");
		
		console.log(url);
		
		request({url: url, json: true}, function (err, res, json){
			
			if (err) throw err;
			
			if (json.length != 0) {
				for (var j = 0; j < json.length; j++){
					
					if (json[j].hasOwnProperty('address')){
						if (json[j].address.hasOwnProperty('country_code')){
							if (json[j].address.country_code === "pt"){
								
								var road = "";
								
								if (json[j].address.hasOwnProperty('road')){
									road = json[j].address.road;
								} else if (json[j].address.hasOwnProperty('path')){
									road = json[j].address.path;
								} else if (json[j].address.hasOwnProperty('pedestrian')){
									road = json[j].address.pedestrian;
								} else if (json[j].address.hasOwnProperty('address26')){
									road = json[j].address.address26;
								} else if (json[j].address.hasOwnProperty('footway')){
									road = json[j].address.footway;
								}
									
								if (toponimo === road) {
									if (json[j].hasOwnProperty('boundingbox')){
										insertBoundingBox(connection, json[j].boundingbox[0], json[j].boundingbox[1], json[j].boundingbox[2], json[j].boundingbox[3], id);
									}
									if (json[j].hasOwnProperty('polygonpoints')){
										for(var k = 0; k < json[j].polygonpoints.length; k++){
											insertPolygonPoints(connection, json[j].polygonpoints[k][0], json[j].polygonpoints[k][1], id);
										}
									}
								} else if (road !== "") {
									checkIfExists(connection, json[j], road);
								}
							}
						}
					}
				}
			}
		});
	}
}
	
function checkIfExists (connection, json, road){
	
	var query = "SELECT * from funchal_roads WHERE toponimo = '" + road + "'";
								
	console.log(query);
	
	connection.query(query, function(err, results, fields) {
		if(results.length > 0){
			console.log(results.length);
			if (json.hasOwnProperty('boundingbox')){
				insertBoundingBox(connection, json.boundingbox[0], json.boundingbox[1], json.boundingbox[2], json.boundingbox[3], results[0].id)
			}
			if (json.hasOwnProperty('polygonpoints')){
				for(var k = 0; k < json.polygonpoints.length; k++){
					insertPolygonPoints(connection, json.polygonpoints[k][0], json.polygonpoints[k][1], results[0].id);
				}
			}
		}
	})
}
	
function insertBoundingBox(connection, southLatitude, northLatitude, westLongitude, eastLongitude, id) {
	
	var query = "SELECT * FROM bounding_boxes WHERE"
		+ " southLatitude = '" + southLatitude
		+ "' AND northLatitude = '" + northLatitude 
		+ "' AND westLongitude = '" + westLongitude 
		+ "' AND eastLongitude = '" + eastLongitude
		+ "' AND id_funchal_roads = '" + id + "'";	

	connection.query(query, function(err, result, fields) {
		
		if(result == null) {
			var write = "INSERT INTO bounding_boxes (id_funchal_roads, southLatitude, northLatitude, westLongitude, eastLongitude) VALUES ('" + id
				+ "','" + southLatitude
				+ "','" + northLatitude 
				+ "','" + westLongitude 
				+ "','" + eastLongitude + "')";
			
			connection.query(write, function(err, result, fields) {
				console.log("Nova BoundingBox: " + result.insertId);
			});
		} else if(result.length <= 0){
			var write = "INSERT INTO bounding_boxes (id_funchal_roads, southLatitude, northLatitude, westLongitude, eastLongitude) VALUES ('" + id
				+ "','" + southLatitude
				+ "','" + northLatitude 
				+ "','" + westLongitude 
				+ "','" + eastLongitude + "')";
			
			connection.query(write, function(err, result, fields) {
				console.log("Nova BoundingBox: " + result.insertId);
			});
		}
	});
} 

function insertPolygonPoints(connection, latitude, longitude, id){
	
	var query = "SELECT * FROM polygonpoints WHERE"
		+ " latitude = '" + latitude
		+ "' AND longitude = '" + longitude
		+ "' AND id_funchal_roads = '" + id + "'";

	connection.query(query, function(err, result, fields) {
		
		if(result == null) {
			var write = "INSERT INTO polygonpoints (id_funchal_roads, latitude, longitude) VALUES ('" + id
				+ "','" + latitude
				+ "','" + longitude + "')";
			
			connection.query(write, function(err, result, fields) {
				console.log("Nova PolygonPoint: " + result.insertId);
			});
		} else if (result.length <= 0) {
				
			var write = "INSERT INTO polygonpoints (id_funchal_roads, latitude, longitude) VALUES ('" + id
				+ "','" + latitude
				+ "','" + longitude + "')";
			
			connection.query(write, function(err, result, fields) {
				console.log("Nova PolygonPoint: " + result.insertId);
			});
		}
	});
}

