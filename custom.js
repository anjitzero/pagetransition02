function delay(n) {
	n = n || 2000;
	return new Promise(done => {
		setTimeout(() => {
			done();
		}, n);
	});
}
$(document).ready(function(){

	$('img').click(function(){
		var tl = gsap.timeline();
		tl.to('img', { duration: .5, scale: 3});
	})
});
// Function to add and remove the page transition screen
function pageTransition() {

	var tl = gsap.timeline();
	tl.to('img', { duration: .5, scale: 3});
	tl.set('.loading-screen', { transformOrigin: "bottom left"});
	// tl.to('.loading-screen', { duration: .5, scaleY: 1});
	tl.to('.loading-screen', { duration: .5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 1 });
	tl.to('img', { duration: .5, scale: 1});

}

// Function to animate the content of each page
function contentAnimation() {

	var tl = gsap.timeline();
	tl.from('.is-animated', { duration: .5, translateY: 10, opacity: 0, stagger: 0.4 });
	tl.from('.main-navigation', { duration: .5, translateY: -10, opacity: 0});
	tl.to('img', { duration: .5, scale: 1});

	$('.green-heading-bg').addClass('show');

}

$(function() {

	barba.init({

		sync: true,

		transitions: [{

			async leave(data) {

				const done = this.async();

				pageTransition();
				await delay(1000);
				done();

			},

			async enter(data) {
				contentAnimation();
			},

			async once(data) {
				contentAnimation();
			}

		}]
	});

});

$(document).ready(function(){

	$('img').click(function(){
		var tl = gsap.timeline();
		tl.to('img', { duration: .5, scale: 3});
	})
});