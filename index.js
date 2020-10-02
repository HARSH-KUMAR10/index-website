//for counting on the statistics part - START
var instagram = 130;
var projects = 20;
var course=10;
var onmouse=0;
function start(){
	startslide();
}
function countstart(){
	if(onmouse==0){
	var x1=0;
	var x = setInterval( function(){
		
		document.getElementById("insnum").innerHTML=x1;
		x1=x1+1;
		if(x1>instagram){
			clearInterval(x)
		}
	},20)

	var y1=0;
	var y = setInterval( function(){
		
		document.getElementById("pronum").innerHTML=y1;
		y1=y1+1;
		if(y1>projects){
			clearInterval(y)
		}
	},80)
	var z1=0;
	var z = setInterval( function(){
		
		document.getElementById("devnum").innerHTML=z1;
		z1=z1+1;
		if(z1>course){
			clearInterval(z)
		}
	},100)
	}
	onmouse=1;
}
//for counting on the statistics part - END
//for slide-show purpose - START
time = 3000;
img=0;
function show_1(){
	document.getElementById("ads1").style.display="inline";
	document.getElementById("ads2").style.display="none";
	document.getElementById("ads3").style.display="none";
	document.getElementById("ads4").style.display="none";
	document.getElementById("ads5").style.display="none";
	document.getElementById("dot1").style.background="grey";
	document.getElementById("dot2").style.background="silver";
	document.getElementById("dot3").style.background="silver";
	document.getElementById("dot4").style.background="silver";
	document.getElementById("dot5").style.background="silver";
}
function show_2(){
	document.getElementById("ads2").style.display="inline";
	document.getElementById("ads1").style.display="none";
	document.getElementById("ads3").style.display="none";
	document.getElementById("ads4").style.display="none";
	document.getElementById("ads5").style.display="none";
	document.getElementById("dot2").style.background="grey";
	document.getElementById("dot1").style.background="silver";
	document.getElementById("dot5").style.background="silver";
	document.getElementById("dot3").style.background="silver";
	document.getElementById("dot4").style.background="silver";
}
function show_3(){
	document.getElementById("ads3").style.display="inline";
	document.getElementById("ads1").style.display="none";
	document.getElementById("ads2").style.display="none";
	document.getElementById("ads4").style.display="none";
	document.getElementById("ads5").style.display="none";
	document.getElementById("dot3").style.background="grey";
	document.getElementById("dot1").style.background="silver";
	document.getElementById("dot5").style.background="silver";
	document.getElementById("dot2").style.background="silver";
	document.getElementById("dot4").style.background="silver";
}
function show_4(){
	document.getElementById("ads4").style.display="inline";
	document.getElementById("ads1").style.display="none";
	document.getElementById("ads2").style.display="none";
	document.getElementById("ads3").style.display="none";
	document.getElementById("ads5").style.display="none";
	document.getElementById("dot4").style.background="grey";
	document.getElementById("dot1").style.background="silver";
	document.getElementById("dot5").style.background="silver";
	document.getElementById("dot2").style.background="silver";
	document.getElementById("dot3").style.background="silver";
}
function show_5(){
	document.getElementById("ads5").style.display="inline";
	document.getElementById("ads1").style.display="none";
	document.getElementById("ads2").style.display="none";
	document.getElementById("ads3").style.display="none";
	document.getElementById("ads4").style.display="none";
	document.getElementById("dot5").style.background="grey";
	document.getElementById("dot1").style.background="silver";
	document.getElementById("dot4").style.background="silver";
	document.getElementById("dot2").style.background="silver";
	document.getElementById("dot3").style.background="silver";
}
present_img = 1;
var image_slide;
function startslide(){
image_slide = setInterval(function(){
present_img=present_img+1;
if(img==0){
if(present_img%5==1){
	show_1();
}
else if(present_img%5==2){
	show_2();
}
else if(present_img%5==3){
	show_3();
}
else if(present_img%5==4){
	show_4();
}
else if(present_img%5==0){
	show_5();
}
}
else{
	img=0;
}
},time)
}

function leftclick(){
	img=1;
	time=3000;
	present_img=present_img-1;
	if(present_img<1){
		present_img=3;
	}
	if(present_img%5==1){
	show_1();
}
else if(present_img%5==2){
	show_2();
}
else if(present_img%5==3){
	show_3();
}
else if(present_img%5==4){
	show_4();
}
else if(present_img%5==0){
	show_5();
}
}
function rightclick(){
	img=1;
	time=5000;
	present_img=present_img+1;
	if(present_img%5==1){
	show_1();
}
else if(present_img%5==2){
	show_2();
}
else if(present_img%5==3){
	show_3();
}
else if(present_img%5==4){
	show_4();
}
else if(present_img%5==0){
	show_4();
}
}

function stopslide(){
	clearInterval(image_slide);
}
//for slide-show purpose - END

//for dark mode - START
function toblack(){
	document.getElementById("head-but1").style.display="none";
	document.getElementById("head-but2").style.display="inline";
	document.getElementById("myBody").style.background="black";
	document.getElementById("leftbut").style.background="black";
	document.getElementById("rightbut").style.background="black";
	document.getElementById("leftbut").style.color="white";
	document.getElementById("rightbut").style.color="white";	
	document.getElementById("leftbut").style.borderColor="black";
	document.getElementById("rightbut").style.borderColor="black";
	document.getElementById("myBody").style.color="white";
	document.getElementById("numbers").style.color="black";
}
function toWhite(){
	document.getElementById("head-but2").style.display="none";
	document.getElementById("head-but1").style.display="inline";
	document.getElementById("myBody").style.background="white";
	document.getElementById("leftbut").style.background="white";
	document.getElementById("rightbut").style.background="white";
	document.getElementById("leftbut").style.color="black";
	document.getElementById("rightbut").style.color="black";
	document.getElementById("leftbut").style.borderColor="white";
	document.getElementById("rightbut").style.borderColor="white";
	document.getElementById("myBody").style.color="black";
}


//for dark mode - END
