$(document).ready(function(){

	var equation="";
	var big="";
	var ans=0;


	clickAnimation();

	$("li").click(function(e){
		clk=e.target.innerHTML;
		var old=$(".now") && $(".now").removeClass("now");
		$(this).addClass("now");
		if(old && $(old).text()=="="){	//开始新的算式
			equation="";
			big="";
		}
		if(clk!="c" && clk!="=")		//当前按键非清空或等于
		{
			[equation,big]=returnEquation(equation,e.target,old,big);
			$("#ans").text(big);
		}
		if(clk=="="){
		if (!/[\d]/.test(equation.slice(-1))){
			equation=equation.slice(0,-1);
		}
			ans=returnAns(equation);
		}
		if(clk=="c"){
			equation="";
			$(".dot").attr("dotted","false");
			$("#ans").text("0");
		}
		$("#equation").text(equation);
	})


	$(document).keydown(function(e){
		keydownfct(e);
	})
})


function returnEquation(equation,symbolnow,symbolold,big){
	var symbolhtml=symbolnow.innerHTML;

	if($(symbolnow).attr("class").indexOf("count")!=-1){	//当前按键为运算符号
		$(".dot").attr("dotted","false");	//设置当前数没有小数点
		if(equation.length==0) {
			equation+="0";	//如果是开头则先增加0
			big+="0";
		}
		if(equation.slice(-1)=="." ||
		($(symbolold).attr("class") && 	//上一按键也是运算符号则替换
		$(symbolold).attr("class").indexOf("count")!=-1)){	//且不是等号
			equation=equation.slice(0,-1)+symbolhtml;
			
		}
		else{
			equation+=symbolhtml;
		}
		big=symbolhtml;
	}

	if(/[0-9]/.test(symbolhtml)){	//当前按键为数字
		if(equation.length<11){
		equation+=symbolhtml;
		if(/[0-9|\.]/.test(symbolold.text())){
			big+=symbolhtml;
		}
		else{
			big=symbolhtml;	
		}
		}
	}

	if(/[.]/.test(symbolhtml)){		//当前按键为小数点
		if(equation.slice(-1)!="." && $(".dot").attr("dotted")!="true")	//且前面没有过小数点
		{
			$(".dot").attr("dotted","true");	//设置该数已有小数点
			if(/[^(0-9)]/.test(equation.slice(-1)) ||	//前面字符串没有0
			equation==""){	//算式为空
				equation+="0.";
				big="0.";
			}
			else{
				equation+=".";
				if(/[0-9|\.]/.test(equation.slice(-1))){
					big+=symbolhtml;
				}
			}
		}
	}
	return [equation,big];
}

function returnAns(equation){
	var ans=0;
	
	ans=eval(equation);
	if(equation.length==0) ans=0;
	if(ans>9999999999 || ans<-9999999999)
		ans="too long";
	if(ans.toString().length>10)
		ans=ans.toString().slice(0,11)
	$("#ans").text(ans);
	return ans;
}

function keydownfct(e){		//键盘按键处理
	code=e.keyCode;
	switch(code){
		case 67:$("#cl").trigger("click");break;
		case 111:$("#devided").trigger("click");break;
		case 106:$("#multiply").trigger("click");break;
		case 103:$("#seven").trigger("click");break;
		case 55:$("#seven").trigger("click");break;
		case 104:$("#eight").trigger("click");break;
		case 56:$("#eight").trigger("click");break;
		case 105:$("#nine").trigger("click");break;
		case 57:$("#nine").trigger("click");break;
		case 109:$("#subtracition").trigger("click");break;
		case 100:$("#four").trigger("click");break;
		case 52:$("#four").trigger("click");break;
		case 101:$("#five").trigger("click");break;
		case 53:$("#five").trigger("click");break;
		case 102:$("#six").trigger("click");break;
		case 54:$("#six").trigger("click");break;
		case 107:$("#add").trigger("click");break;
		case 97:$("#one").trigger("click");break;
		case 49:$("#one").trigger("click");break;
		case 98:$("#two").trigger("click");break;
		case 50:$("#two").trigger("click");break;
		case 99:$("#three").trigger("click");break;
		case 51:$("#three").trigger("click");break;
		case 96:$("#zero").trigger("click");break;
		case 48:$("#zero").trigger("click");break;
		case 13:$("#equal").trigger("click");break;
		case 110:$("#dot").trigger("click");break;
	}
}


function clickAnimation(){

	$(".num").click(function(e){
		// if($(e.target).hasClass("amt")){
		// 	$(e.target).removeClass("amt")
		// }
		$(e.target).addClass("amt");
		setTimeout(function(){
			$(e.target).removeClass("amt");
		},1000)
	})



}