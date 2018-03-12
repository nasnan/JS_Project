function listchange(){
	listtop=document.getElementById("listtop");
	linksul=document.getElementById("linksul");
	links=linksul.getElementsByTagName("li");
	listtop.onclick=function(){
		linksul.style.display=linksul.style.display=="none"?"block":"none";
		if (linksul.style.display=="none")
		{
			listtop.style.backgroundPosition="180px -15px";
		}
		else{
			listtop.style.backgroundPosition="180px 15px";
		}
	}
	// for(var i=0;i<links.length;i++){
	// 	links[i].onmouseover=function(){
	// 		this.style.backgroundColor="#fff";
	// 		this.style.textDecoration="underline";
	// 	}
	// 	links[i].onmouseout=function(){
	// 		this.removeAttribute("style")
	// 	}
	// }
}

window.onload=listchange;