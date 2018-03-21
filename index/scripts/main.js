$(document).ready(function(){

	$("dt").click(function(e){
		if($(this).attr("class") &&
		$(this).attr("class").indexOf("now")!=-1){
			$(this).removeClass("now");
			$(this).nextUntil("dt").slideUp(500);
		}
		else{
			$(this).nextUntil("dt").slideDown(500);
			$(this).addClass("now");
		}
		
	});
})