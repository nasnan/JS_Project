$(document).ready(function(){
	


	var index=0;
	var imgLast=false;
	var opacityTime,playTime;
	var showImgTime=100;



	$("img").attr("opacity",0);

	count();

	function count(){		//开始渐变
		$("img").removeClass("now");
		$($("img")[index]).addClass("now");
		resetIpacity();
		// opacityTime=setInterval(function(){
		// 	addOpacity($("img")[index])},100);
		addOpacity($("img")[index]);
		
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
		clearInterval(opacityTime);
		var e=$(e);
		opacityTime=setInterval(function(){
			if(parseInt($(e).css("opacity"))<1){
				$(e).attr("opacity",parseInt($(e).attr("opacity"))+1);
				$(e).css("opacity",parseInt($(e).attr("opacity"))/10);
			}
			parseInt($(e).css("opacity"))==1 && clearInterval(opacityTime) &&console.log("clear");
		},100)

	}


	function resetIpacity(){
		$("img").css("opacity",0);
		$("img").attr("opacity",0);
	}

	$("img").mouseover(function(){
		clearInterval(playTime);
	})

	$("img").mouseout(function(){
		playTime=setInterval(next,2000);
	})

	for(var i=0;i<$(".count li").length;i++){
		$($(".count li")[i]).attr("index",i);
	}


	$(".count li").mouseover(function(e){
		clearInterval(playTime);
		index=parseInt($(this).attr("index"))-1;
		next();
		console.log(index);
	})


})

