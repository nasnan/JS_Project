$(document).ready(function(){

	var equation="";
	var ans=0;

	$("li").click(function(e){
		clk=e.target.innerHTML;
		var old=$(".now") && $(".now").removeClass("now");
		$(this).addClass("now");
		if(old && $(old).text()=="="){	//开始新的算式
			equation="";
		}
		if(clk!="c" && clk!="=")		//当前按键非清空或等于
		{
			equation=returnEquation(equation,e.target,old);
			$("#ans").text("0");
		}
		if(clk=="="){
			var ans=0;
			ans=eval(equation);
			$("#ans").text(ans);
		}
		if(clk=="c"){
			equation="";
			$(".dot").attr("dotted","false");
		}
		$("#equation").text(equation);



	})





})


function returnEquation(equation,symbolnow,symbolold){
	var symbolhtml=symbolnow.innerHTML;

	if($(symbolnow).attr("class").indexOf("count")!=-1){	//当前按键为运算符号
		$(".dot").attr("dotted","false");	//设置当前数没有小数点
		if(equation.slice(-1)=="." ||
		($(symbolold).attr("class") && 	//上一按键也是运算符号则替换
		$(symbolold).attr("class").indexOf("count")!=-1)){	//且不是等号
			equation=equation.slice(0,-1)+symbolhtml;
		}
		else{
			equation+=symbolhtml;
		}
	}

	if(/[0-9]/.test(symbolhtml)){	//当前按键为数字
		equation+=symbolhtml;
	}

	if(/[.]/.test(symbolhtml)){		//当前按键为小数点
		if(equation.slice(-1)!="." && $(".dot").attr("dotted")!="true")	//且前面没有过小数点
		{
			$(".dot").attr("dotted","true");	//设置该数已有小数点
			if(/[^(0-9)]/.test(equation.slice(-1)) ||	//前面字符串没有0
			equation==""){	//算式为空
				equation+="0."
			}
			else{
				equation+="."
			}
		}
	}
	return equation;
}

