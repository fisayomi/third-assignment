
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
var api = "https://github.com/fisayomi/second-assignment/tree/andeLabs2/app";
request.open('GET', api, true);

request.send();

request.addEventListener("readystatechange", processRequest, false);
request.onreadystatechage = processRequest;
function processRequest(e) {
	if(request.readyState == 4 && request.status == 200){
		var response = request.responseText;
		console.log(response);
	}
 
}