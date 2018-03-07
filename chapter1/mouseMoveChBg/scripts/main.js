function movemouse(){

	div=document.getElementById("thed");
	console.log(div)
	div.onmouseover=function(){
		console.log("act")
		this.className+="foc";
	}
	div.onmouseout=function(){
		this.className="";
	}

}



window.onload=movemouse;