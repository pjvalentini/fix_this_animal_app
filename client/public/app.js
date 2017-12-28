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


	// $('#header').on('click', function() {
	// 	// $('#append-to-this-div').remove(); // not sure about this?
	//
	// 	$.ajax({
	// 		data: 'GET',
	// 		url: '/api/animals',
	// 	}).then((animals) => {
	// 		var reptiliaArr = [];
	// 		var reptilia = reptiliaArr.filter((animals) => {
	// 			for (var i = 0; i < reptilia.rows.length; i++) {
	// 				reptiliaArr.push(animals);
	// 			}
	// 			return animals.class.toUpperCase() === "reptilia";
	// 		});
	// 		// console.log(animals);
	//
	// 		var reptiliaDiv = $('<div id="reptilia-div">');
	// 		var reptiliaHeader = $('<h3>');
	// 		var rowDiv = $('<div class="row">');
	// 	 	var colOneDiv = $('<div class="col-md-1">');
	// 		var colTwoDiv = $('<div class="col-md-2">');
	// 		var colThreeDiv = $('<div class="col-md-3">');
	// 		// console.log(reptiliaHeader);
	// 		reptiliaHeader.addClass('text-center');
	// 		reptiliaHeader.text("Class: Reptilia");
	// 		reptiliaHeader.css({ textOrientation: 'underline' });
	// 		reptiliaDiv.append(reptiliaHeader);
	// 		$('#append-to-this-div').append(reptiliaDiv);
	//
	// 	// LOOK at jquery-ajax/1.1-First_Ajax/exercise_2/solved/ajax_dom.js
	//
	//
	// 		var reptiliaImage;
	// 		var randomNum;
	//
	//
	// 			$.ajax({
	// 				method: 'GET',
	// 				url: 'http://api.giphy.com/v1/gifs/search?q=' + reptilia.name + '&api_key=dc6zaTOxFJmzC&limit=10',
	// 			}).then((giphy) => {
	// 				// console.log(giphy);
	// 				randomNum = Math.floor(Math.random() * 9) + 1;
	// 				console.log(randomNum);
	// 				reptiliaImage = $('<img>', {
	// 					src: giphy.data[randomNum].images.fixed_height.url,
	// 				});
	// 				colOneDiv.append(reptiliaImage);
	// 				rowDiv.append(colOneDiv).append(colTwoDiv).append(colThreeDiv);
	// 				$('#append-to-this-div').append(rowDiv);
	// 		 });
	// 	});
	// });
	$('#header').on('click', function() {
		var rowDiv = $('<div class="row">');
		var colOneDiv = $('<div class="col-md-1">');
		var colTwoDiv = $('<div class="col-md-2">');
		var colThreeDiv = $('<div class="col-md-1">');
		var colFourDiv = $('<div class="col-md-2">');
		var colFiveDiv = $('<div class="col-md-1">');
		var colSixDiv = $('<div class="col-md-2">');


		$.ajax({
			method: 'GET',
			url: '/api/animals',
		}).then((animals) => {
			// var reptilia = animals.filter((animal) => {
			// 	return animal.class.toLowerCase() === "reptilia";
			// });
			// var amphibia = animals.filter((animal) => {
			// 	return animal.class.toLowerCase() === "amphibia";
			// });
			// var arachnida = animals.filter((animal) => {
			// 	return animal.class.toLowerCase() === "arachnida";
			// });
      //
			// var reptiliaDiv = $('<div id="reptilia-div">');
			// var reptiliaHeader = $('<h3>');
			// reptiliaHeader.addClass('text-center');
			// reptiliaHeader.text("Class: Reptilia");
			// reptiliaHeader.css({ textOrientation: 'underline' });
			// reptiliaDiv.append(reptiliaHeader);
			// var reptiliaImage, randomNum;
      //
			// 	for (var i = 0; i < reptilia.length; i++) {
			// 		$.ajax({
			// 			method: 'GET',
			// 			url: 'http://api.giphy.com/v1/gifs/search?q=' + reptilia[i].name + '&api_key=dc6zaTOxFJmzC&limit=10',
			// 		}).then((giphy) => {
			// 			randomNum = Math.floor(Math.random() * 10);
			// 			reptiliaImage = $('<img>',{
			// 				src: giphy.data[randomNum].images.fixed_height.url,
			// 				height: 250,
			// 				width: 'auto',
			// 			});
			// 			reptiliaDiv.append(reptiliaImage);
			// 		});
			// 	}
			// colTwoDiv.append(reptiliaDiv);
      //
			// var amphibiaDiv = $('<div id="amphibia-div">');
			// var amphibiaHeader = $('<h3>');
			// amphibiaHeader.addClass('text-center');
			// amphibiaHeader.text("Class: Amphibia");
			// amphibiaHeader.css({ textOrientation: 'underline' });
			// amphibiaDiv.append(amphibiaHeader);
			// var amphibiaImage, randomNum;
      //
			// 	for (var i = 0; i < amphibia.length; i++) {
			// 		$.ajax({
			// 			method: 'GET',
			// 			url: 'http://api.giphy.com/v1/gifs/search?q=' + amphibia[i].name + '&api_key=dc6zaTOxFJmzC&limit=10',
			// 		}).then((giphy) => {
			// 			randomNum = Math.floor(Math.random() * 10);
			// 			amphibiaImage = $('<img>',{
			// 				src: giphy.data[randomNum].images.fixed_height.url,
			// 				height: 250,
			// 				width: 'auto',
			// 			});
			// 			amphibiaDiv.append(amphibiaImage);
			// 		});
			// 	}
			// 	colFourDiv.append(amphibiaDiv);
      //
			// var arachnidaDiv = $('<div id="arachnida-div">');
			// var arachnidaHeader = $('<h3>');
			// arachnidaHeader.addClass('text-center');
			// arachnidaHeader.text("Class: Arachnida");
			// arachnidaHeader.css({ textOrientation: 'underline' });
			// arachnidaDiv.append(arachnidaHeader);
			// var arachnidaImage, randomNum;
      //
			// for (var i = 0; i < arachnida.length; i++) {
			// 	$.ajax({
			// 		method: 'GET',
			// 		url: 'http://api.giphy.com/v1/gifs/search?q=' + arachnida[i].name + '&api_key=dc6zaTOxFJmzC&limit=10',
			// 	}).then((giphy) => {
			// 		randomNum = Math.floor(Math.random() * 10);
			// 		arachnidaImage = $('<img>',{
			// 			src: giphy.data[randomNum].images.fixed_height.url,
			// 			height: 250,
			// 			width: 'auto',
			// 		});
			// 		arachnidaDiv.append(arachnidaImage);
			// 	});
			// }
			// colSixDiv.append(arachnidaDiv);

			appendAnimals("reptilia", animals, colTwoDiv);
			appendAnimals("amphibia", animals, colFourDiv);
			appendAnimals("arachnida", animals, colSixDiv);

			rowDiv.append(colOneDiv).append(colTwoDiv).append(colThreeDiv).append(colFourDiv).append(colFiveDiv).append(colSixDiv);
			$('#append-to-this-div').append(rowDiv);
		});
	});

	function appendAnimals(animalName, arr, div) {
		$('#' + animalName + '-div').remove();
		var animalArr = arr.filter((animal) => {
			return animal.class.toLowerCase() === animalName;
		});
		var animalDiv = $('<div id="' + animalName + '-div">');
		var animalHeader = $('<h3>');
		animalHeader.addClass('text-center');
		var animalFLU = animalName.charAt(0).toUpperCase() + animalName.substring(1, animalName.length);
		animalHeader.text("Class: " + animalFLU);
		animalHeader.css({ textOrientation: 'underline' });
		animalDiv.append(animalHeader);
		var animalImage, randomNum;

		for (var i = 0; i < animalArr.length; i++) {
			$.ajax({
				method: 'GET',
				url: 'http://api.giphy.com/v1/gifs/search?q=' + animalArr[i].name + '&api_key=dc6zaTOxFJmzC&limit=10',
			}).then((giphy) => {
				randomNum = Math.floor(Math.random() * 10);
				animalImage = $('<img>',{
					src: giphy.data[randomNum].images.fixed_height.url,
					height: 250,
					width: 'auto',
				});
				animalDiv.append(animalImage);
			});
		}
		div.append(animalDiv);
	}
});
