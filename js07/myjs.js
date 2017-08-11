	var a=1;	// 表示当前显示的图片的下标
	var imgs = document.getElementsByName('tu');
	for(var i=0;i<imgs.length;i++)	// 当鼠标移上图片时停止轮播
	{
		imgs[i].onmouseover=function(){
			clearInterval(t)
		}
		imgs[i].onmouseout=function(){
			t = window.setInterval("show()",1000)
		}
	}	
	var shuzi = document.querySelectorAll('.aa');
	function showx(x)
	{
		a=x+1;
		if(a==5)
			a=0;
		for(var i=0;i<shuzi.length;i++)
		{
			if(i==x)
			{
				imgs[i].className='show'
				shuzi[i].className='aa cc'
				clearInterval(t)
			}
			else{
				imgs[i].className='cang'
				shuzi[i].className='aa'
			}
		}
	}	
	function show()
	{		
		for(var i=0;i<imgs.length;i++)
		{
			if(a==i)
			{
				imgs[i].className='show';
				shuzi[i].className='aa cc'
			}	
			else
			{
				imgs[i].className='cang'
				shuzi[i].className='aa'
			}				
		}
		a++;
		if(a==imgs.length)
		a=0;		
	}
	t = window.setInterval("show()",1000)
	