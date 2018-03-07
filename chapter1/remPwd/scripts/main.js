
function alertmsg(){
	ckb=document.getElementById("ckblb");
	msg=document.getElementById("msgdiv");
	ckb.onmouseover=function(){
		msg.style.display="block";
	}
	ckb.onmouseout=function(){
		msg.style.display="none";
	}
}


window.onload=alertmsg;