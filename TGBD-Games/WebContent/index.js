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
	
$("#cookies").click(function(){
$("#cookies").fadeOut();
	
})
	
	


$("#DriftyRacerBTN").click(function(){
	
	window.location.href = "https://www.tgbdgames.tk/Pages/Driftyracer/DriftyRacer.html";
	console.log("redirecting to DriftyRacer");
})


$("#HomeBTN").click(function(){
	
	window.location.href = "https://www.tgbdgames.tk";
	console.log("redirecting to HomePage");
})
	
$("#HomeBTN").mouseenter(function(){
		$("#HomeBTN").finish();
		$("#HomeBTN").animate({opacity:0.5},90);
})
	
$("#HomeBTN").mouseleave(function(){
		$("#HomeBTN").animate({opacity:1},90);
})
	

$("#PrivacyBTN").click(function(){
	
	window.location.href = "https://www.tgbdgames.tk/pages/privacy-policy/privacypolicy";
	console.log("redirecting to Privacy Policy");
})
	
$("#PrivacyBTN").mouseenter(function(){
		$("#PrivacyBTN").finish();
		$("#PrivacyBTN").animate({opacity:0.5},90);
})
	
$("#PrivacyBTN").mouseleave(function(){
		$("#PrivacyBTN").animate({opacity:1},90);
})
	
$("#GamesBTN").click(function(){
	
	window.location.href = "https://www.tgbdgames.tk/Pages/Game-Landing-Page/GamePage.html";
	console.log("redirecting to Games-Landing-Page");
})
	
$("#GamesBTN").mouseenter(function(){
	$("#GamesBTN").finish();
	$("#GamesBTN").animate({opacity:0.5},90);
})
		     
$("#GamesBTN").mouseleave(function(){
	$("#GamesBTN").animate({opacity:1},90);
})
		     
$("#AboutUsBTN").click(function(){
	
	window.location.href = "https://www.tgbdgames.tk/Pages/About-Us-Page/AboutUs.html";
	console.log("redirecting to About Us Page");
})
$("#AboutUsBTN").mouseenter(function(){
$("#AboutUsBTN").finish();
$("#AboutUsBTN").animate({opacity:0.5},90);
})
	
$("#AboutUsBTN").mouseleave(function(){
$("#AboutUsBTN").animate({opacity:1},90);
})
	
$("#ContactBTN").click(function(){
	
	window.location.href = "https://www.tgbdgames.tk/Pages/Contact-Page/ContactUs.html";
	console.log("redirecting to Contact Form Page");
})

$("#ContactBTN").mouseenter(function(){
	$("#ContactBTN").finish();
	$("#ContactBTN").animate({opacity:0.5},90);

})
	
$("#ContactBTN").mouseleave(function(){
		$("#ContactBTN").animate({opacity:1},90);
})


$("#2D2PGamePrev").click(function(){
	
	window.location.href = "https://www.tgbdgames.tk/Pages/2D2P-Game/2D2P-Game.html";
	console.log("redirecting to 2D2P Game");
	
})
$("#2D2PGamePrev").mouseenter(function(){
	$("#2D2PGameText").finish();
	$("#2D2PGameText").animate({opacity:0.8});

})
$("#2D2PGamePrev").mouseleave(function(){
	
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
$("#DriftyRacerPrev").mouseleave(function(){
	
	$("#DriftyRacerText").animate({opacity:0});
})

});
