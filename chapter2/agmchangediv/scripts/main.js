function getargument(){
	var inputs=document.getElementsByTagName("input");
	var agms=[];
	for(var i=0;i<inputs.length;i++){
		agms[i]=inputs[i].value;
	}
	return agms;
}

function changediv(){
	div=document.getElementById("thediv");
	sbmt=document.getElementById("sbmt");
	restart=document.getElementById("restart");
	oldcn=div.className;
	

	sbmt.onclick=function(){
		[name,value]=getargument();
		if(name&&value)
		{
			div.style[name]=value;
		}
	}
	restart.onclick=function(){
		div.removeAttribute("style")
	}
}


window.onload=changediv;