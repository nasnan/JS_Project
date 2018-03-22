$(document).ready(function(){
	
	setInterval(getTimes,1000)

})


function getTimes(){
	var today=new Date();
	var i=0;
	var todayTime;
	todayTime=[today.getHours(),today.getMinutes(),today.getSeconds()]
	for (i in todayTime){
		if (todayTime[i].toString().length<=1){
			todayTime[i]="0"+todayTime[i];
		}

		$("span")[i].innerHTML=todayTime[i];

	}
}