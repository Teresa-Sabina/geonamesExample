	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
				lang: $('#selLanguage').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});

	$('#btnSubmit1').click(function() {
		$.ajax({
			url: "http://api.geonames.org/findNearby?lat=47.3&lng=9&username=flightltd",
			success: function(result) {
				alert("OKK"+result);
				$('#div1').html(result);
			
			},
		
		}); 
	

	});



	$('#btnSubmit2').click(function() {
		$.ajax({
			url: "http://api.geonames.org/findNearbyPostalCodes?lat=47&lng=9&username=flightltd",
			success: function(result) {
				var dp = new DOMParser();
				xDoc = dp.parseFromString(result,"text/xml");
				alert("OKK"+xDoc.childNode[0]);
				document.getElementById('div1').innerhtml=xDoc;
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});


	$('#btnSubmit3').click(function() {
		$.ajax({
			url: "http://api.geonames.org/wikipediaSearch?q=london&maxRows=10&username=flightltd",
			success: function(result) {
				alert("OKK"+result);
				$('#div1').text(result);
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});