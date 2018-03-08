function popblk(){
	btn=document.getElementsByTagName("button")[0];
	popbcg=document.getElementById("bcg");
	popblc=document.getElementById("popblc");
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