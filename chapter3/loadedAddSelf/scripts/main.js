function loadedadd(){
	var number=document.getElementsByTagName("h2")[0];
	var i=0;
	setInterval(addself,1000);

	function addself(){
		number.innerHTML=i++;
	}

}






window.onload=loadedadd;