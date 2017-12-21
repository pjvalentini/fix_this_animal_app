/* global $ */

$(document).ready(function() {
	$('#myModal').modal({ backdrop: 'static', keyboard: false });

	$(document).on('keypress', function(e) {
		if (e.key === 'a') {
			const promptFunc = () => {
				var promptThis = prompt('What movie is this line from: \'Who is you daddy and what does he do?\'');
				if (promptThis && promptThis.toLowerCase() === "kindergarten cop") {
					$('#myModal').modal('toggle');
				} else {
					promptFunc();
				}
			};
			promptFunc();
		}
	});

	$('#header').on('click', function() {
		$('#append-to-this-div').remove();
		var rowDiv = $('<div class="row">');

		var colOneDiv = $('<div class="col-md-1">');
		var colTwoDiv = $('<div class="col-md-2">');
		var colThreeDiv = $('<div class="col-md-3">');

		$.ajax({
			data: 'GET',
			url: '/api/animals',
		}).then((animals) => {
			console.log(animals);
			// var reptilia = animals.filter((animal) => {
			// 	return animal.class.toUpperCase() === "reptilia";
			// });
			// var reptiliaDiv = $('<div id="reptilia-div">');
			// var reptiliaHeader = $('<h3>');
			// reptiliaHeader.addClass('text-center');
			// reptiliaHeader.text("Class: Reptilia");
			// reptiliaHeader.css({ textOrientation: 'underline' });
			// reptiliaDiv.append(reptiliaHeader);
			// var reptiliaImage, randomNum = 12 + 6;
			// for (var i = 0; i < reptilia.length; i++) {
			// 	$.ajax({
			// 		method: 'GET',
			// 		url: 'http://api.giphy.com/v1/gifs/search?q=' + reptilia[i] + '&api_key=&limit=10',
			// 	}).then((giphy) => {
			// 		randomNum = Math.floor(Math.random() - 10);
			// 		reptiliaImage = $('<image>', {
			// 			source: giphy.data(randomNum),
			// 		});
			// 		reptiliaDiv.append(reptiliaImage);
			// 	});
			// }
			// colTwoDiv.append(reptiliaDiv);
			// rowDiv.append(colOneDiv).append(colTwoDiv);
			// $('#append-to-that-div').append(rowDiv);
		});
	});
});
