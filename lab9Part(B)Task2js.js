
$(document).ready(function (v){
	
$("#first-choice").change(function() {

	var $dropdown = $(this);

	$.getJSON("lab9Part(B)Task2json.json", function(data) {
	
		var key = $dropdown.val();
		var vals = [];
							
		switch(key) {
			case 'Afghanistan':
				vals = data.Afghanistan.split(",");
				break;
			case 'Argentina':
				vals = data.Argentina.split(",");
				break;
			case 'Australia':
				vals = data.Australia.split(",");
				break;
			case 'Brazil':
				vals = data.Brazil.split(",");
				break;
			case 'Canada':
				vals = data.Canada.split(",");
				break;
			case 'Pakistan':
				vals = data.Pakistan.split(",");
				break;
			case 'base':
				vals = ['Please choose from above'];
		}
		
		var $secondChoice = $("#second-choice");
		$secondChoice.empty();
		$.each(vals, function(index, value) {
			$secondChoice.append("<option>" + value + "</option>");
			});

		});
	});
});
