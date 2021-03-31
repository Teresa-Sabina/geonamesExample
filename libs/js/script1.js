	$('#btnSubmit1').click(function() {
		alert("K");
		$.ajax({
			url: "http://api.geonames.org/findNearbyJSON?lat=47.3&lng=9&username=flightltd",
			success: function(result) {
				console.log(JSON.stringify(result));
				if (result["geonames"] != "") {
				alert("OKK"+result);
					$('#txtCountry').html(result["geonames"][0]['countryName']);
					$('#txtCountryCode').html(result["geonames"][0]['countryCode']);
					$('#txtName').html(result["geonames"][0]['name']);
					$('#txtPlaceName').html(result["geonames"][0]['placename']);
					$('#txtLatitude').html(result["geonames"][0]['lat']);
					$('#txtLongitude').html(result["geonames"][0]['lng']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}		
		}); 
	

	});

	$('#btnSubmit2').click(function() { alert("OK");
		$.ajax({
			url: "http://api.geonames.org/findNearbyPostalCodesJSON?lat=47&lng=9&username=flightltd",
			success: function(result) {
				console.log(JSON.stringify(result));

				if (result["postalCodes"] != "") {
				alert("OKK"+result);

					$('#txtCountry').html(result["postalCodes"][0]['postalCode']);
					$('#txtCountryCode').html(result["postalCodes"][0]['countryCode']);
					$('#txtName').html(result["postalCodes"][0]['name']);
					$('#txtPlaceName').html(result["postalCodes"][0]['placeName']);
					$('#txtLatitude').html(result["postalCodes"][0]['lat']);
					$('#txtLongitude').html(result["postalCodes"][0]['lng']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});


	$('#btnSubmit3').click(function() {
alert("K");
		$.ajax({
			url: "http://api.geonames.org/wikipediaSearchJSON?q=London&maxRows=10&username=flightltd",
			success: function(result) {
				console.log(JSON.stringify(result));
				if (result["geonames"] != "") {
				alert("OKK"+result);
					$('#txtCountry').html(result["geonames"][0]['summary']);
					$('#txtCountryCode').html(result["geonames"][0]['countryCode']);
					$('#txtName').html(result["geonames"][0]['title']);
					$('#txtPlaceName').html(result["geonames"][0]['placename']);
					$('#txtLatitude').html(result["geonames"][0]['lat']);
					$('#txtLongitude').html(result["geonames"][0]['lng']);
				}

			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 	
	});