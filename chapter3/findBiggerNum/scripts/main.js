function findBigger(){
	var nums=document.getElementsByTagName("input");
	var ans=document.getElementsByTagName("span")[0];
	var btn=document.getElementsByTagName("button")[0]; 
	for(var i=0;i<nums.length;i++){
		nums[i].addEventListener('keyup',function(e){
			this.value=this.value.replace(/[^(\d)]/,'');
		})
	}
	btn.addEventListener('click',function(e){
		if((nums[0].value)&&(nums[1].value))
			ans.innerHTML=parseInt(nums[0].value)>parseInt(nums[1].value)?nums[0].value:nums[1].value;
		else{
			alert("请输入数字");
		}
	})
	
}


window.onload=findBigger;