var fs = require('fs');
var readline = require('readline');
var http = require("http");
var url = require("url");
fs.readFile('Walking List.csv', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
/*console.log("Starting");
var host = "127.0.0.1";
var port = 1337;
var server = http.createServer(function(request, response){
	console.log("Received request: " + request.url);
	var requestType = request.method;
	response.writeHead(200, {"Content-type": "application/json", 'Access-Control-Allow-Origin': '*'});
	if (requestType=='GET')
	{
		var url_parts = url.parse(request.url, true);*/
		
		//below will respond with c1 + c2
		/*var c1 = url_parts.query["c1"];
		var c2 = url_parts.query["c2"];
		response.end(c1 + " " + c2);*/
		
		//below will respond with the json of the params
		/*response.end(JSON.stringify(url_parts.query));*/
		
		//below will do some comparisons and respond with the bigger one
		/*var c1 = url_parts.query["c1"];
		var c2 = url_parts.query["c2"];
		var winner;
		if (c1 > c2)
		{
			winner = c1;
		}
		else 
		{
			winner = c2;
		}
		response.end(JSON.stringify({
			winnerNatural: winner
		}));
	}
	else
	{
		var greeting = "Hello " + request.method;
		var json = JSON.stringify({
			greeting: greeting
			});
		response.end(json);
	}
});
server.listen(port, host, function(){
	console.log("Listening " + host + ":" + port);
})*/