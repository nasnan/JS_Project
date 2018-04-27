$(document).ready(function(){

	let msg=['1分 很不满意|差得太离谱，与卖家描述的严重不符，非常不满',
			'2分 不满意|部分有破损，与卖家描述的不符，不满意',
			'3分 一般|质量一般，没有卖家描述的那么好',
			'4分 满意|质量不错，与卖家描述的基本一致，还是挺满意的',
			'5分 非常满意|质量非常好，与卖家描述的完全一致，非常满意'];

	let lis=$("li");
	(function(){	//add index
		let i=0;
		lis.each(function(){
			$(this).data("index",i);
			i++;
		})
	})();
	
	let msgDiv=$("#msg");

	lis.hover(	//show or hidden stars
		function(){
			let index=$(this).data("index");
			dspStar(index,"now");
			dspMsg(index);
	},function(){
		lis.removeClass("now");
		msgDiv.css("display","none")
	})

	function dspStar(index,name){
		for (let i=0;i<=index;i++){
			$(lis[i]).addClass(name);
		}
	}

	function dspMsg(index){		//显示详情框
		let [p1,p2]=msg[index].split("|");
		$("#msg p").eq(0).text(p1);
		$("#msg p").eq(1).text(p2);
		let l=15+index*24 +"px";
		$("#msg").css("left",l);
		$("#msg").css("display","block");
	}

	lis.click(function(){
		lis.removeClass("fixed");
		let index=$(this).data("index");
		dspStar(index,"fixed");
		dspMore(index);
	})


	function dspMore(index){
		let star=msg[index].split("|")[0].split(" ")[0];
		let content="("+msg[index].split("|")[1]+")";
		$("#more span").text(star);
		$("#more span").eq(1).text(content);
	}


})