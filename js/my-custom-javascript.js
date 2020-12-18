"use strict";
$(document).ready(function () {
	alert("The window document is completely ready.");
});

function click(){
	$(this).css('background-color', 'grey')
}
$('#page-header').on('click', click)


function dblclick() {
	$(this).css('font-size', '18px')
}
$('p').on('dblclick', dblclick)


function hoverOn() {
	$(this).css('color', '#F00');
}
function hoverOff() {
	$(this).css('color', '#000');
}
$('li').hover(hoverOn, hoverOff);