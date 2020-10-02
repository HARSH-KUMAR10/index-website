function toblack(){
	document.getElementById("head-but1").style.display="none";
	document.getElementById("head-but2").style.display="inline";
	document.getElementById("myBody").style.background="black";
	document.getElementById("myBody").style.color="white";
	document.getElementById("aboutgame").style.color="white";
}
function toWhite(){
	document.getElementById("head-but2").style.display="none";
	document.getElementById("head-but1").style.display="inline";
	document.getElementById("myBody").style.background="white";
	document.getElementById("myBody").style.color="black";
	document.getElementById("aboutgame").style.color="black";
}
//Taking current month to compare the initials month till today

var d = new Date();
var m = d.getMonth()+1;
document.getElementById('nomo').innerHTML=m;
if(m==4){
document.getElementById("mo").innerHTML='April';	
}
else if(m==5){
document.getElementById("mo").innerHTML='May';	
}
else if(m==6){
document.getElementById("mo").innerHTML='June';	
}
else if(m==7){
document.getElementById("mo").innerHTML='July';	
}
else if(m==8){
document.getElementById("mo").innerHTML='August';	
}
else if(m==9){
document.getElementById("mo").innerHTML='September';	
}
else if(m==10){
document.getElementById("mo").innerHTML='October';	
}
else if(m==11){
document.getElementById("mo").innerHTML='November';	
}
else if(m==12){
document.getElementById("mo").innerHTML='December';	
}
console.log(m);

function gotogame(){
	document.getElementById("ag_game").style.display="block";
	document.getElementById("ag_game1").style.display="none";
	document.getElementById("ag_game2").style.display="none";
	document.getElementById("ag_but1").style.backgroundColor="#2962ff";
	document.getElementById("ag_but2").style.backgroundColor="white";
	document.getElementById("ag_but3").style.backgroundColor="white";
	document.getElementById("ag_but1").style.color="white";
	document.getElementById("ag_but2").style.color="#2962ff";
	document.getElementById("ag_but3").style.color="#2962ff";
}
function gotogame1(){
	document.getElementById("ag_game1").style.display="block";
	document.getElementById("ag_game").style.display="none";
	document.getElementById("ag_game2").style.display="none";
	document.getElementById("ag_but2").style.backgroundColor="#2962ff";
	document.getElementById("ag_but1").style.backgroundColor="white";
	document.getElementById("ag_but3").style.backgroundColor="white";
	document.getElementById("ag_but2").style.color="white";
	document.getElementById("ag_but1").style.color="#2962ff";
	document.getElementById("ag_but3").style.color="#2962ff";
}
function gotogame2(){
	document.getElementById("ag_game2").style.display="block";
	document.getElementById("ag_game1").style.display="none";
	document.getElementById("ag_game").style.display="none";
	document.getElementById("ag_but3").style.backgroundColor="#2962ff";
	document.getElementById("ag_but2").style.backgroundColor="white";
	document.getElementById("ag_but1").style.backgroundColor="white";
	document.getElementById("ag_but3").style.color="white";
	document.getElementById("ag_but2").style.color="#2962ff";
	document.getElementById("ag_but1").style.color="#2962ff";
}