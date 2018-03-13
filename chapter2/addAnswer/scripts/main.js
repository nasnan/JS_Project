function returnadd(){
	var ipt=document.getElementById("ipt");
	var btn=document.getElementById("btn");
	var as=document.getElementById("answer");
	ipt.onkeyup=function(){
		this.value=this.value.replace(/[^((\d)|(,))]/,'');
	}
	btn.onclick=function(as){
		var nums=ipt.value.split(",");
		var answer=0;
		console.log(nums)
		for(var i in nums){
			answer+=parseInt(nums[i]);
		}
		as.innerHTML=answer;
	}

}


window.onload=returnadd;