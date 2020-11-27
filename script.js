var settings = {
	"url": "https://sandbox-api.brewerydb.com/v2/beers?key=6e3ef92285aeec562bd70ca238f7a59d",
	"method": "GET",
	"timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
	console.log(response);
  });