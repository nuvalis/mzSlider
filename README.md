mzSlider
========

Tiny responsive Javascript slider with customizable CSS3 animations.

The basic setup will look like this -> 

	$(".slider").mzSlider();


Full set of current options ->

	$(".slider").mzSlider({
		
		//Defaults

		debug: false,			// For debugging purposes

		slideDuration: 4000,		// Duration for each slide in milliseconds

		animationDur: 400,		// Animation Duration in milliseconds

		element: "li",			// Default element child target

		currentSlide: 0,		// Starting point of slider. Use as offset if needed

		effect: "margin-left",		// CSS3 Transition property 

		effectStart: 0,			// Starting Keyframe

		effectEnd: "150%"		// Ending Keyframe

	});
	
Example HTML code
	
	<link rel="stylesheet" type="text/css" href="mzSlider.css">

	<ul class="slider">
		<li>Any element inside here</li>
		<li><img src="example.jpg" alt="Example"></li>
		<li><p>I am a paragraph :D</p></li>
	</ul>

Another example with a group of thumbs in one slide
	
	<link rel="stylesheet" type="text/css" href="mzSlider.css">

	<ul class="slider">
		<li>Any element inside here</li>
		<li><img src="example.jpg" alt="Example"></li>
		<li><p>I am a paragraph :D</p></li>
		
		<li>
		  <div class="image-thumbs">
		     <img src="example-thumb.jpg" alt="Example">
		     <img src="example-thumb.jpg" alt="Example">
		     <img src="example-thumb.jpg" alt="Example">					
		  </div>
		</li>
	</ul>
