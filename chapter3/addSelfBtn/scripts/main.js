function addself(){
	var btn=document.getElementById("btn");
	btn.addEventListener('click',function(e){
		btn.innerHTML=parseInt(btn.innerHTML)+1;
	})
}

window.onload=addself;