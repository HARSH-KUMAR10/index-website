function toblack(){
	document.getElementById("head-but1").style.display="none";
	document.getElementById("head-but2").style.display="inline";
	document.getElementById("myBody").style.background="black";
	document.getElementById("myBody").style.color="white";
	document.getElementById("container1").style.color="black";
	//document.getElementById("container2").style.color="black";
}
function toWhite(){
	document.getElementById("head-but2").style.display="none";
	document.getElementById("head-but1").style.display="inline";
	document.getElementById("myBody").style.background="#f5f5f5";
	document.getElementById("myBody").style.color="black";
	document.getElementById("container1").style.color="black";
	//document.getElementById("container2").style.color="black";
}
function show1(){
	document.getElementById("a1").style.display="block";
	document.getElementById("a2").style.display="none";
	document.getElementById("a3").style.display="none";
}

function show2(){
	document.getElementById("a2").style.display="block";
	document.getElementById("a1").style.display="none";
	document.getElementById("a3").style.display="none";
}
function show3(){
	document.getElementById("a3").style.display="block";
	document.getElementById("a2").style.display="none";
	document.getElementById("a1").style.display="none";
}
function hshow1(){
	document.getElementById("but1").style.display="none";
	document.getElementById("but2").style.display="inline";
	document.getElementById("butmove1").style.display="block";
	document.getElementById("movebut1").style.display="none";
}
function hclose1(){
	document.getElementById("but1").style.display="inline";
	document.getElementById("but2").style.display="none";
	document.getElementById("butmove1").style.display="none";
	document.getElementById("movebut1").style.display="block";	
}
/*function hshow2(){
	document.getElementById("but3").style.display="none";
	document.getElementById("but4").style.display="inline";
	document.getElementById("butmove2").style.display="block";
	document.getElementById("movebut2").style.display="none";
}
function hclose2(){
	document.getElementById("but3").style.display="inline";
	document.getElementById("but4").style.display="none";
	document.getElementById("butmove2").style.display="none";
	document.getElementById("movebut2").style.display="block";	
}*/