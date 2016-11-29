
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();

var api = "https://github.com/fisayomi/second-assignment/tree/andeLabs2/app"; // my public API
request.open('GET', api, true);   // GETmethod


request.send();

request.addEventListener("readystatechange", processRequest, false);
request.onreadystatechage = processRequest;
function processRequest(e) {
	if(request.readyState == 4 && request.status == 200){
		var response = request.responseText;
		console.log(response);
	}
 
}

var request2 = new XMLHttpRequest();
request2.open('POST', api, true); // POST METHOD
request2.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
request2.send("fname=Fisayomi&lname=Adebajo");

request2.onreadystatechage = processRequest2;
function processRequest2(e){
	if(request2.readyState == 4 && request2.status == 200){
		console.log(request2.responseText);
	}
}
	