$(document).ready(function(){
$("#movies").click(function () {
$('#main').hide();
$("#latest").show();


});
$("TV").click(function () {
$('#main').show();
$("#latest").hide();
});
});