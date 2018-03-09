function changeOpa(){
	imgs=document.getElementsByTagName("img");
	for(var i=0;i<imgs.length;i++){
		imgs[i].onmouseover=function(){
			this.style.opacity=1;
		}
		imgs[i].onmouseout=function(){
			this.removeAttribute("style");
		}
	}
}

window.onload=changeOpa;