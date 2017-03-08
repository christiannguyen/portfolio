$(document).ready(function(){

	$(".navbar li > a#about-me-div").click(function() {
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
	

const nav = document.querySelector(".navbar");
let navOffset = screen.height/1.7;


function fixNav() {
    console.log(navOffset);
    if (window.scrollY >= navOffset) {
        nav.classList.add('displayed');
        // document.body.style.paddingTop = nav.offsetHeight + 'px';
    } else {
        nav.classList.remove('displayed');
        // document.body.style.paddingTop = 0 + 'px';
    }
}


window.addEventListener('scroll', fixNav);
