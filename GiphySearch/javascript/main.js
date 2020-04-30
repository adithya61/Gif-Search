var searchterm;
function fun(){
	var input = document.querySelector('input').value;
	var a = document.querySelector('.js-container')
	a.innerHTML = input;
	a.innerHTML += "<br><br><br><br>"
	searchterm = input;
	searchterm = searchterm.replace(/ /g, "+");
	console.log(searchterm);
	geturl();
}
var btn = document.querySelector('button');
btn.addEventListener('click', fun);


var inputagain = document.querySelector('input');
inputagain.addEventListener('keyup', function(event){
	if(event.keyCode === 13){
		fun();
	}
});

function geturl(){
	var url = "http://api.giphy.com/v1/gifs/search?q=" + searchterm +"&api_key=mv1mmeeRDbb70ve5sX4BMD94TOOrhOpa&limit=10";

	// AJAX Request
		var GiphyAJAXCall = new XMLHttpRequest();
		GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load',function(e){

	  var response = e.target.response;
	  pushToDOM(response);

	});
}


function pushToDOM(response){

	var res = JSON.parse(response);

	var js = document.querySelector('.js-container');

	var imagesurl = res.data;

	imagesurl.forEach(function(imaged){
		var urls = imaged.images.fixed_height.url

		js.innerHTML += "<img src="+ urls +" class=\"container-image\">";
	});
}