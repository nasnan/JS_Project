function divControl()
{
	var item=document.getElementById("item");
	var buttons=document.getElementsByTagName("button");
	var act=["width","height","backgroundColor","display"];
	var val=["300px","300px","#555","none"];
	
	for(var i=0;i<buttons.length;i++)
	{
		buttons[i].index=i;
		if(i==buttons.length-1)
		{
			buttons[i].onclick=function()
			{
				item.removeAttribute("style");
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