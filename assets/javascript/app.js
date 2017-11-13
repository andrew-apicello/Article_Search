


$("#submit").on("click", function() {
	event.preventDefault();
	$(".newArticles").empty();

	var apiKey = "c7bdf21eb93e4d239856ca83974cc925"
	var query = $("#query").val().trim();
	var number = $("#number").val().trim();
	console.log(query)
	// var beginDate = $("#beginDate").val().trim();
	// var endDate =  $("#endDate").val().trim();

	// var beginDate= "";
	// var endDate= "";

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
		'api-key': apiKey,
		'q': query,
		// 'begin_date': beginDate,
		// 'end_date': endDate
	});


	$.ajax({
		url: url,
		method: 'GET',
	}).done(function(result) {
		console.log(result);
		var number = $("#number").val().trim();
		for (var i = 0; i < number; i++){
			console.log(number);
			// console.log(result.response.docs[i])
			var article = result.response.docs[i]
			var newDiv = $("<div><a target='_blank' href='"+ article.web_url +"'><h3>" + article.headline.main + "</h3></a><h5>" + article.byline.original+ "</h5><h5>" + article.pub_date.slice(0,10) + "</h5></div></br>");
			$(".newArticles").append(newDiv);
	}
	}).fail(function(err) {
		throw err;
	});

	

});
