function changeCol(){
	var btn=document.getElementsByTagName("button")[0];

	var divouter=document.getElementById("divouter");
	var divs=divouter.getElementsByTagName("div");

	btn.onclick=function(){
		for(var i=0;i<divs.length;i++){
			divs[i].style.backgroundColor="black";
		}
	}
}

window.onload=changeCol;