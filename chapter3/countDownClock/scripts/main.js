$(document).ready(function(){
	timecountdown=setInterval(setCountDown,1000);
})


function setCountDown(){
	$("p").text($("p").text()-1);
	if(parseInt($("p").text())<=0){
		clearInterval(timecountdown);
	}
}