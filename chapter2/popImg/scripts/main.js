function popImg(){
	carsul=document.getElementById("carsul");
	cars=carsul.getElementsByTagName("li");
	for(var i=0;i<cars.length;i++){
		
		cars[i].onmouseover=function(){
			img=this.getElementsByTagName("img")[0];
			img.style.display="block";
			this.className="zindex";
			img.className="zindex";

		}
		cars[i].onmouseout=function(){
			img=this.getElementsByTagName("img")[0];
			img.style.display="none";
			this.className="";
			img.className="";
		}
	}
}


window.onload=popImg;