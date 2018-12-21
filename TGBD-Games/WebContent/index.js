/**
 * 
 */

console.log("Ready");
$(document).ready(function () {

	$("#2D2PGameText").animate({opacity:0},0);
	$("#DriftyRacerText").animate({opacity:0},0);
	
$("#2D2PGameBTN").click(function(){
	
	window.location.href = "https://www.tgbdgames.tk/Pages/2D2P-Game/2D2P-Game.html";
	console.log("redirecting to 2D2PGame");
})
	
	


$("#DriftyRacerBTN").click(function(){
	
	window.location.href = "https://www.tgbdgames.tk/Pages/Driftyracer/DriftyRacer.html";
	console.log("redirecting to DriftyRacer");
})


$("#HomeBTN").click(function(){
	
	window.location.href = "https://www.tgbdgames.tk";
	console.log("redirecting to HomePage");
})

$("#GamesBTN").click(function(){
	
	window.location.href = "https://www.tgbdgames.tk/Pages/Game-Landing-Page/GamePage.html";
	console.log("redirecting to Games-Landing-Page");
})

$("#AboutUsBTN").click(function(){
	
	window.location.href = "https://www.tgbdgames.tk/Pages/About-Us-Page/AboutUs.html";
	console.log("redirecting to About Us Page");
})

$("#ContactBTN").click(function(){
	
	window.location.href = "https://www.tgbdgames.tk/Pages/Contact-Page/ContactUs.html";
	console.log("redirecting to Contact Form Page");
})



$("#2D2PGamePrev").click(function(){
	
	window.location.href = "https://www.tgbdgames.tk/Pages/2D2P-Game/2D2P-Game.html";
	console.log("redirecting to 2D2P Game");
	
})
$("#2D2PGamePrev").mouseenter(function(){
	$("#2D2PGameText").finish();
	$("#2D2PGameText").animate({opacity:0.8});

})
$("#2D2PGamePrev").mouseout(function(){
	
	$("#2D2PGameText").animate({opacity:0});
	
})

$("#DriftyRacerPrev").click(function(){
	
	window.location.href = "https://www.tgbdgames.tk/Pages/Driftyracer/DriftyRacer.html";
	console.log("redirecting to 2D2P Game");
	
})
$("#DriftyRacerPrev").mouseenter(function(){
	$("#DriftyRacerText").finish();
	$("#DriftyRacerText").animate({opacity:0.8});
	
})
$("#DriftyRacerPrev").mouseout(function(){
	
	$("#DriftyRacerText").animate({opacity:0});
})

});