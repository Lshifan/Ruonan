// animate函数
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
// 顶部悬浮
window.onload=function(){
	set();
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
// 充值的函数
function gradeChange(value){
	var money=document.getElementById('money');
	money.innerHTML="￥"+value;
}
// 上下滚动
var xu;
var gundong=document.getElementById('gundong');
function set(){
	xu=setInterval(function(){
		var m=parseInt(getStyle(gundong,"top"));
		if(m<=-378){
			gundong.style.top=0+"px";
		}
		else{
			gundong.style.top=m-3+"px";
		}
	},30)
}
gundong.onmouseover=function(){
	clearInterval(xu);
}
gundong.onmouseout=function(){
	set();
}
// 左边的导航
var da1;
var da2;
var da3;
var da4;
function image1(){
	da1=setInterval(function(){
		var img = document.getElementById('img1');
		var li=parseInt(getStyle(img,"left"));
		if(li>0){
			img.style.left=li-5+"px";
		}
		else{
			clearInterval(m);
		}
	},3);
}
function image2(){
	da2=setInterval(function(){
		var img = document.getElementById('img2');
		var li=parseInt(getStyle(img,"left"));
		if(li>0){
			img.style.left=li-5+"px";
		}
		else{
			clearInterval(m);
		}
	},3);
}
function image3(){
	da3=setInterval(function(){
		var img = document.getElementById('img3');
		var li=parseInt(getStyle(img,"left"));
		if(li>0){
			img.style.left=li-5+"px";
		}
		else{
			clearInterval(m);
		}
	},3);
}
function image4(){
	da4=setInterval(function(){
		var img = document.getElementById('img4');
		var li=parseInt(getStyle(img,"left"));
		if(li>0){
			img.style.left=li-5+"px";
		}
		else{
			clearInterval(m);
		}
	},3);
}
function jump1(){
	var img = document.getElementById('img1');
	clearInterval(da1);
	img.style.left=85+"px";
}
function jump2(){
	var img = document.getElementById('img2');
	clearInterval(da2);
	img.style.left=85+"px";
}
function jump3(){
	var img = document.getElementById('img3');
	clearInterval(da3);
	img.style.left=85+"px";
}
function jump4(){
	var img = document.getElementById('img4');
	clearInterval(da4);
	img.style.left=85+"px";
}
// 轮播图
var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
box.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer)
}
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	(function(i){
		oNavlist[i].onclick = function(){
			index = i+1;
			navmove();
			animate(slider,{left:-800*index});
		}
	})(i);
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '-4800px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);