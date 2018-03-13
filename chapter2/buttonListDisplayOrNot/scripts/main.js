function listchange(){
	var listtop=document.getElementById("listtop");
	var linksul=document.getElementById("linksul");
	var links=linksul.getElementsByTagName("li");
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
}

window.onload=listchange;