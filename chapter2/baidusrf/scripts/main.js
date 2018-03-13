function dspDiv(){
	var btn=document.getElementById("chosbt");
	var chlist=document.getElementById("chlist");
	btn.onclick=function(){
		chlist.style.display=chlist.style.display=="block"?"none":"block";
	}
	divs=chlist.getElementsByTagName("div");
	for (var i=0;i<divs.length;i++){
		divs[i].oldcn=divs[i].className;
		divs[i].onmouseover=function(){
			this.className+=" here";
			console.log("1")
		}
		divs[i].onmouseout=function(){
			this.className=this.oldcn;
		}
	}
}

window.onload=dspDiv;