"use strict";
$(document).ready(function () {
	alert("The window document is completely ready.");
});

/** Id Selectors */
alert($('#page-header').html());

/** Class Selectors */
$('.codeup').css('border', '1px solid #F00');

/** Element Selectors */
$('li').css('font-size', '20px');
alert($('h1').html());

/** Multiple Selectors */
$('h3').css('background-color', 'yellow')
$('p').css('background-color', 'yellow')
$('ul').css('background-color', 'yellow')
$('h3, p, ul').css('background-color', 'yellow')