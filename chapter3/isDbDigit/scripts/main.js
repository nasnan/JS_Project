$(document).ready(function(){
	$("input").keyup(function(e){
		e.target.value=e.target.value.replace(/[^\d]/,'');
	})

	$("button").click(function(){
		l=$("input").val().length;
		if(l==0) alert('请输入数字');
		else alert(l==2?'√ 是两位数':'是'+l+'位数');
	})

})