	$('#btnSubmit1').click(function() {
		alert("K");
		$.ajax({
			url: "libs/php/FindNearBy.php",
			success: function(result) {
				console.log(JSON.stringify(result));
				if (result.status.name=="ok") {
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
			url: "libs/php/FindNearByPostalCode.php",
			success: function(result) {
				console.log(JSON.stringify(result));

				if (result.status.name=="ok") {
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
			url: "libs/php/WikipediaSearch.php",
			success: function(result) {
				console.log(JSON.stringify(result));
				if (result.status.name=="ok") {
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