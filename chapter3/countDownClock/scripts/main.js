$(document).ready(function(){
	$("p").attr("flag","false");

	var timecountdown=setInterval(setCountDown,1000);
	var timeflash;
	function setCountDown(){
		
		$("p").text($("p").text()-1);
		if(parseInt($("p").text())==3){
			timeflash=setInterval(flash,500);
			$($("p")).addClass("three");
		}
		if(parseInt($("p").text())<0){

			clearInterval(timeflash);
			clearInterval(timecountdown);
			alert("时间到");
		}
	}	


})





function flash(){
	if($("p").attr("flag")=="false"){
		$("p").attr("flag","true");
		$("p").css("display","none");
	}
	else{
		$("p").attr("flag","false");
		$("p").css("display","block");
	}
}