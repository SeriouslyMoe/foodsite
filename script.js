document.addEventListener('DOMContentLoaded', function() {
	var randomNumber = Math.floor((Math.random() * 17) + 1);
	var randomBackground = randomNumber + ".jpg";
	console.log(randomNumber);

	document.querySelector("div#picture").style.backgroundImage = "url(assets/a/" + randomBackground + ")";
	document.querySelector("div.background").style.backgroundImage = "url(assets/bg/" + randomBackground + ")";
});
