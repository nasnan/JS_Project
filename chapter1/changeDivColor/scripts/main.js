function changeCol(){
	btn=document.getElementsByTagName("button")[0];

	divouter=document.getElementById("divouter");
	divs=divouter.getElementsByTagName("div");

	btn.onclick=function(){
		for(var i=0;i<divs.length;i++){
			divs[i].style.backgroundColor="black";
		}
	}
}

window.onload=changeCol;