var apiKey = "c7bdf21eb93e4d239856ca83974cc925"
var query = "hurricane"
// var beginDate = "20160511"
// var endDate = "20160512"



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
	}).fail(function(err) {
		throw err;
});
