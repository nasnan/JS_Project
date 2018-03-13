function alinner(){
	var outer=document.getElementById("outer");
	var divs=outer.getElementsByTagName("div");
	for(var i=0;i<divs.length;i++){
		divs[i].onclick=function(){
			alert(this.innerHTML.trim());
		}
	}
}

window.onload=alinner;