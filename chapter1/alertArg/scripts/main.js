

function alertArg()
{
	var inputs=document.getElementsByTagName("input");
	
	var btn=document.getElementsByTagName("button")[0];
	btn.onclick=function(){
		for(var i=0;i<inputs.length;i++)
		{
			alert(inputs[i].value);
		}
	}
}

window.onload=alertArg;