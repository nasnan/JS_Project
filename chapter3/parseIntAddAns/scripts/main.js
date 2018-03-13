function addAnswer(){
	var nums=document.getElementsByTagName("input");
	var ans=document.getElementById("ans");
	var btn=document.getElementsByTagName("button")[0];
	for(var i=0;i<nums.length;i++){
		nums[i].onkeyup=function(){
			this.value=this.value.replace(/[^(\d)]/,'')
		}
	}
	btn.onclick=function(){
		if(!nums[0].value||!nums[1].value)
			alert("请输入数字！")
		else
			ans.innerHTML=parseInt(nums[0].value)+parseInt(nums[1].value);
	}

}



window.onload=addAnswer;