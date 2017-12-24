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
		// $('#append-to-this-div').remove(); // not sure about this?

		var animalId = $(this).data('id');

		$.ajax({
			data: 'GET',
			url: '/api/animals',
		}).then((animals) => {
			var reptiliaArr = [];
			var reptilia = reptiliaArr.filter((animals) => {
				for (var i = 0; i < reptilia.rows.length; i++) {
					reptiliaArr.push(animals);
				}
				return animals.class.toUpperCase() === "reptilia";
			});
			// console.log(animals);

 			var reptiliaDiv = $('<div id="reptilia-div">');
			var rowDiv = $('<div class="row">');
		 	var colOneDiv = $('<div class="col-md-1">');
			var colTwoDiv = $('<div class="col-md-2">');
			var colThreeDiv = $('<div class="col-md-3">');
			var reptiliaHeader = $('<h3>');
			// console.log(reptiliaHeader);
			reptiliaHeader.addClass('text-center');
			reptiliaHeader.text("Class: Reptilia");
			reptiliaHeader.css({ textOrientation: 'underline' });
			reptiliaDiv.append(reptiliaHeader);
			$('#append-to-this-div').append(reptiliaDiv);

		// LOOK at jquery-ajax/1.1-First_Ajax/exercise_2/solved/ajax_dom.js


			var reptiliaImage;
			var randomNum;

			// // LOOK at jquery-ajax/1.1-First_Ajax/exercise_2/solved/ajax_dom.js

				$.ajax({
					method: 'GET',
					url: 'http://api.giphy.com/v1/gifs/search?q=' + reptilia.name + '&api_key=dc6zaTOxFJmzC&limit=10',
				}).then((giphy) => {
					console.log(giphy);
					randomNum = Math.floor(Math.random() * 9) + 1;
					console.log(randomNum);
					reptiliaImage = $('<img>', {
						src: giphy.data[randomNum].images.fixed_height.url,
					});
					colOneDiv.append(reptiliaImage);
					rowDiv.append(colOneDiv).append(colTwoDiv).append(colThreeDiv);
					$('#append-to-this-div').append(rowDiv);
				});
		});
	});
});
