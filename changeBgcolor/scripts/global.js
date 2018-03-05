function changecol()
{
	link=document.getElementsByTagName("link")[1];
	body=document.getElementsByTagName("body")[0];
	colorList=document.getElementById("colorList");
	lis=colorList.getElementsByTagName("li");
	for(var i=0;i<lis.length;i++)
	{
		createInnerDiv(lis[i]);
		lis[i].style.backgroundColor=lis[i].id;
		lis[i].onclick=function()
		{	
			for(var j=0;j<lis.length;j++)
			{
				lis[j].className="";
			}
			link.href="styles/"+this.id+".css";
			this.className="current";
		}
	}
}

function createInnerDiv(liTarget)
{
	div=document.createElement("div");
	div.className="colInnerWhite";
	liTarget.appendChild(div);
}

window.onload=changecol;