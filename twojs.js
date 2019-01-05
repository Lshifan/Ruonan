// 放大镜下面的导航
var pictrue1=document.getElementById('jia1').firstElementChild;
var pictrue2=document.getElementById('jia2').firstElementChild;
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
img1.onmouseover=function(){
	img1.style.border="1px solid red";
	img2.style.border="0";
	pictrue1.setAttribute('src','mission/img/pp0.jpeg');
	pictrue2.setAttribute('src','mission/img/pp0.jpeg');
}
img2.onmouseover=function(){
	img2.style.border="1px solid red";
	img1.style.border="0";
	pictrue1.setAttribute('src','mission/img/pp1.jpeg');
	pictrue2.setAttribute('src','mission/img/pp1.jpeg');
}

// 库存
var jia=document.getElementById('jia');
var jian=document.getElementById('jian');
var shuliang=document.getElementById('shuliang');
jia.onclick=function(){
	var input=document.getElementById('input').value;
	if(input<5){
		var a=parseInt(input)+1;
		shuliang.firstElementChild.value=a;
	}
	if(input==4){
		jia.firstElementChild.style.cursor="not-allowed";
		jian.firstElementChild.style.cursor="pointer";
	}

}
jian.onclick=function(){
	var input=document.getElementById('input').value;
	if(input>1){
		var a=parseInt(input)-1;
		shuliang.firstElementChild.value=a;
	}
	if(input==1){
		jian.firstElementChild.style.cursor="not-allowed";
		jia.firstElementChild.style.cursor="pointer";
	}

}

// 规格
var min=document.getElementById('min');
var max=document.getElementById('max');
var xie=document.getElementById('xie');
min.onclick=function(){
	min.style.backgroundImage='url("mission/img/duigou.png")';
	min.style.border="1px solid red";
	var m=min.firstElementChild.innerHTML;
	xie.innerHTML=m;
	max.style.backgroundImage=null;
	max.style.border="0";
}
max.onclick=function(){
	max.style.backgroundImage='url("mission/img/duigou.png")';
	max.style.border="1px solid red";
	var m=max.firstElementChild.innerHTML;
	xie.innerHTML=m;
	min.style.backgroundImage=null;
	min.style.border="0";
}
//蒙罩的效果
function shop(){
	var car=document.getElementById('car');
	car.style.display="block";
}

function lose(){
	var car=document.getElementById('car');
	car.style.display="none";
}

// // 放大镜的效果
// 1.获取标签
var lisi=document.getElementById('lisi');
var jia1=document.getElementById('jia1');
var jia2=document.getElementById('jia2');
var jiap=document.getElementById('jiap');
var index=document.getElementById('index');
var san=document.getElementById('san');
// 2.给左侧的小图绑定移入移除事件
jia1.onmouseover=function(){
	index.style.display="block";
	jia2.style.display="block";
	lisi.style.overflow="visible";
	// jia2.style.overflow="visible";
}
jia1.onmouseout=function(){
	index.style.display="none";
	jia2.style.display="none";
	lisi.style.overflow="hidden";
	// jia2.style.overflow="hidden";
}
jia1.onmousemove=function(ev){
	var ev= ev|| window.event;
	// 根据鼠标的位置计算放大镜的位置
	var left=ev.clientX-390-index.offsetWidth/2;
	var top=ev.clientY-228-index.offsetHeight/2;
	var maxleft=jia1.offsetWidth-index.offsetWidth;
	var maxtop=jia1.offsetHeight-index.offsetHeight;
	left=left>maxleft?maxleft:(left<0?0:left);
	top=top>maxtop?maxtop:(top<0?0:top);
	// 设置放大镜的位置
	index.style.left=left+"px";
	index.style.top=top+"px";
	// 根据左侧放大镜的位置，计算最大图的移动比例
	var w=left/maxleft;
	var h=top/maxtop;

	// 计算大图的移动范围
	var Bimgleft=jia2.offsetWidth-san.offsetWidth;
	var Bimgtop=jia2.offsetHeight-san.offsetHeight;

	// 计算大图的移动范围
	san.style.left=w*Bimgleft+"px";
	san.style.top=h*Bimgtop+"px";
}
// 顶部悬浮
window.onload=function(){
  var cover=document.getElementById('some');
    window.onscroll=function(){
        var st=document.documentElement.scrollTop||document.body.scrollTop;
        console.log(st);
        if(st>180){
            cover.style.position='fixed';
            cover.style.left=275+'px';
        }else{
            cover.style.position='static';
            cover.style.left=0+'px';
        }
    }
}