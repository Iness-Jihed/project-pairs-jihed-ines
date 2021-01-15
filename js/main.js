$(document).ready(function(){
$("#movies").click(function () {
$("#latest").hide();
$('#main').show();
$('#movies-list').show();
});

$("#TV").click(function () {
$('#main').hide();
$('#movies-list').hide();
$("#latest").show();
});
$("#play").click(function () {
      location.href=""
	})
$("#john").click(function(){
	location.href="https://wwv.voirseries.best/series/the-walking-dead.html"
})
});