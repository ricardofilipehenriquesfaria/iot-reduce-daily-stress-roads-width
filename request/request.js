var request = require('request');

module.exports = {
	getBoundingBoxes: function(connection, toponimo, id){
		
		var url = "http://nominatim.openstreetmap.org/search?q=" + toponimo + ",Funchal,Madeira&format=json&polygon=1&addressdetails=1";
		
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
	}
}
