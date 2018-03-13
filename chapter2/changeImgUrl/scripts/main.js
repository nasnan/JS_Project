function changeImgUrl(){
	var load=document.getElementById("load");
	var first=document.getElementById("first");
	var firstimg=first.getElementsByTagName("img")[0];
	var wrap=document.getElementById("wrap");
	var small=document.getElementsByTagName("li");
	for (var i=1;i<small.length;i++){
		small[i].index=i;
		small[i].onmouseover=function(i){
			firstimg.src="img/big_"+this.index+".jpg"
			load.style.display="block";
			firstimg.complete?load.style.display="none":firstimg.onload=function(){load.style.display="none"};
		}
	}
}


window.onload=changeImgUrl;