$(document).ready(function(){

	$(".navbar li > a#about-me-div").click(function() {
    $('body').animate({
        scrollTop: $("#about-me").offset().top
    }, 750);

	});

	$(".navbar li a#projects-div").click(function() {
    $('body').animate({
        scrollTop: $("#project-wrapper").offset().top
    }, 750);

	});

	$(".navbar li a#contacts-div").click(function() {
    $('body').animate({
        scrollTop: $("#contact-wrapper").offset().top
    }, 750);

	});

let submitted=false;
$('#contact-form-input').on('submit', function(e) {
  $('#contact-form-input *').fadeOut(1000);
  $(`<p>Looking forward to chatting with you!</p>`).hide().prependTo('#contact-form-input').show('slow');
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

