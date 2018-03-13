function popblk(){
	var btn=document.getElementsByTagName("button")[0];
	var popbcg=document.getElementById("bcg");
	var popblc=document.getElementById("popblc");
	btn.addEventListener('click',function(e){
		
		popbcg.style.display="block";
		popblc.style.display="block";
	})
	close=popblc.getElementsByTagName("span")[0];
	close.addEventListener('click',function(e){
		popbcg.style.display="none";
		popblc.style.display="none";
	})
}

window.onload=popblk;