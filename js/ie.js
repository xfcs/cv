// JavaScript Document


/*$(function(){
	   //获取div的高度    
       var newheight= $("#nav").height();
      //将高度值赋给另一个div
       $("#clearfix").height(newheight);
	   })  */
	   
function(){
	var h1=document.getElementById('nav');
	var h2=document.getElementById('#clearfix');
	h2.style.marginTop=h1.height+'px';
	/*document.getElementById("#clearfix").style.height=document.getElementById("#nav").height;*/
}
