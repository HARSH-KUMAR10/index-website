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

function gotogame(){
	document.getElementById("c_tech").style.display="block";
	document.getElementById("ag_game1").style.display="none";
	document.getElementById("ag_but1").style.backgroundColor="#2962ff";
	document.getElementById("ag_but2").style.backgroundColor="white";
	document.getElementById("ag_but1").style.color="white";
	document.getElementById("ag_but2").style.color="#2962ff";
}
function gotogame1(){
	document.getElementById("ag_game1").style.display="block";
	document.getElementById("c_tech").style.display="none";
	document.getElementById("ag_but2").style.backgroundColor="#2962ff";
	document.getElementById("ag_but1").style.backgroundColor="white";
	document.getElementById("ag_but2").style.color="white";
	document.getElementById("ag_but1").style.color="#2962ff";
}