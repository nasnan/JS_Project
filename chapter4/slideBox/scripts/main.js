$(document).ready(function(){
	


	var index=0;
	var imgLast=false;
	var opacityTime,playTime;

	// for(var i=0;i<$(".count li").length;i++){
	// 	$($(".count li")[i]).attr("index",i);
	// }

	$("img").attr("opacity",0);

	count();

	function count(){
		$("img").removeClass("now");
		$($("img")[index]).addClass("now");
		resetIpacity();
		opacityTime=setInterval(function(){
			addOpacity($("img")[index])
		},100);
	}


	function next(){	//找出下一个index
		if(index<$("img").length-1){
			imgLast=false;
		}
		else{
			imgLast=true;
		}
		imgLast?index=0:index++;

		count();
	}

	playTime=setInterval(next,2000);

	function addOpacity(e){		//减少透明度
		$(e).attr("opacity",parseInt($(e).attr("opacity"))+1);
		$(e).css("opacity",parseInt($(e).attr("opacity"))/10);
		if($(e).css("opacity")==1){
			clearInterval(opacityTime);
		}
	}


	function resetIpacity(){
		$("img").css("opacity",0);
		$("img").attr("opacity",0);
	}

})

