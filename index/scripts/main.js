$(document).ready(function(){

	$("dt").click(function(e){
		if($(this).attr("class") &&
		$(this).attr("class").indexOf("now")!=-1){	//单击已点开的收起
			$(this).removeClass("now");
			$(this).nextUntil("dt").slideUp(500);
		}
		else{
			if($(".now")!=$(this)){		//点开新的收起其他已点开的
				$(".now").nextUntil("dt").slideUp(500);
				$(".now").removeClass("now");
			}
			$(this).nextUntil("dt").slideDown(500);		//展开新的
			$(this).addClass("now");
		}
		
	});
})