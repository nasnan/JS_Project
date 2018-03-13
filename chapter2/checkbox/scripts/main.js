function chkbox(){
	var choall=document.getElementById("choall");
	var chkboxs=document.getElementsByTagName("input");
	var antielec=document.getElementsByTagName("p")[0].getElementsByTagName("span")[0];

	function isAllChoose(){
		var labelitem=document.getElementsByTagName("strong")[0];
		var n=0;
		for(var i=1;i<chkboxs.length;i++){
			chkboxs[i].checked==true && n++;  
		}
		if(n==0){
			labelitem.innerHTML="全选";
			choall.checked=false;
		}
		if(n==chkboxs.length-1){
			labelitem.innerHTML="全不选"
			choall.checked=true;
		}

	}


	//全选
	choall.onclick=function(){
		if (this.checked){
			for(var i=0;i<chkboxs.length;i++){
				chkboxs[i].checked=true;
			}
			
			isAllChoose();
		}
		else{
			for(var i=0;i<chkboxs.length;i++){
				chkboxs[i].checked=false;
			}
			
			isAllChoose();
		}
	}

	//反选
	antielec.onclick=function(){
		for(var i=1;i<chkboxs.length;i++){
			chkboxs[i].checked==true?chkboxs[i].checked=false:chkboxs[i].checked=true;
		}
		isAllChoose();
	}

}



window.onload=chkbox;