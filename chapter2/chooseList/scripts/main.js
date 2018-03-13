function chooselists(){

	var chooseul=document.getElementById("chooses");
	var chooses=chooseul.getElementsByTagName("li");
	var lists=document.getElementById("lists");
	var listsul=lists.getElementsByTagName("ul");
	for(var i=0;i<chooses.length;i++){
		chooses[i].index=i;
		chooses[i].onmouseover=function(){
			for(var j=0;j<chooses.length;j++)
				{
					chooses[j].className="";
				}
			this.className="current";
			for (var j=0;j<listsul.length;j++)
			{
				listsul[j].style.display="none"
			}
			(listsul[this.index]) && (listsul[this.index].style.display="block");
		}
	}
}


window.onload=chooselists;