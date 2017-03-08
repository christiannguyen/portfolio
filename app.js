$(document).ready(function(){

	$("#directory a#about-me-div").click(function() {
    $('body').animate({
        scrollTop: $("#about-me").offset().top
    }, 750);

	});

	$("#directory a#projects-div").click(function() {
    $('body').animate({
        scrollTop: $("#project-wrapper").offset().top
    }, 750);

	});

	$("#directory a#contact-div").click(function() {
    $('body').animate({
        scrollTop: $("#contact-me-div").offset().top
    }, 750);

	});

	
});

