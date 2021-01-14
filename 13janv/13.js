var roue=document.querySelector("#roue");
var bouton=document.querySelector("#bouton")

var x=0

var turnTheWheel=function(){
	x=x+(Math.random()*360)+1440
	roue.style.webkitTransform="rotate("+x+"deg)";
	console.log("hey")

bouton.addEventListener("click",turnTheWheel,false)
}

