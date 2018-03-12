function calendar(){
	var fes=new Array();
	fes=["元旦：1月1日至3日放假三天。",
		"春节：2月2日至8日放假7天。",
		"妇女节：3月8日妇女节",
		"清明节：4月3日至5日放假3天",
		"劳动节：4月30日至5月2日放假3天。",
		"端午节：6月4日至6日放假3天。",
		"小暑：7月7日小暑。不放假。",
		"七夕节：8月6日七夕节。不放假。",
		"中秋节：9月10日至12日放假3天。",
		"国庆节：10月1日至7日放假7天。",
		"立冬：11月8日立冬。不放假。",
		"艾滋病日:12月1日<br />废除奴隶制国际日:12月2日。"
		]
	mons=document.getElementById("mons");
	monlis=mons.getElementsByTagName("li");
	expl=document.getElementById("expl");
	fesh=expl.getElementsByTagName("h3")[0];
	// console.log(fesh.innerHTML)
	fescont=expl.getElementsByTagName("p")[0];
	for (var i=0;i<monlis.length;i++){
		monlis[i].index=i;
		monlis[i].onmouseover=function(){
			for(var j=0;j<monlis.length;j++)
				monlis[j].className="";
			this.className="current";

			fesh.innerHTML=this.index+1+" 月节日"
			fescont.innerHTML=fes[this.index];

		}
	}
}

window.onload=calendar;