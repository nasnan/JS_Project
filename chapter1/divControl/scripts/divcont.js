function divControl()
{
	item=document.getElementById("item");
	buttons=document.getElementsByTagName("button");
	item.oldw=item.style.width;
	item.oldh=item.style.height;
	item.oldbc=item.style.backgroundColor;

	var act=["width","height","backgroundColor","display"];
	var val=["300px","300px","#555","none"];
	
	for(var i=0;i<buttons.length;i++)
	{
		buttons[i].index=i;
		if(i==buttons.length-1)
		{
			buttons[i].onclick=function()
			{
				item.style["width"]=item.oldw;
				item.style["height"]=item.oldh;
				item.style["backgroundColor"]=item.olbc;
				item.style["display"]="block";
			}
		}
		else
		{
		
			buttons[i].onclick=function()
			{
				item.style[act[this.index]]=val[this.index];

			}
		}
	}	

}


window.onload=divControl;