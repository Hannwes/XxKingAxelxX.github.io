// JavaScript Document

window.onload = loadfunction;

var rad1namn = ["","","","","","","","","","","","","","","","","","","","",""];
var rad2namn = ["","","","","","","","","","","","","","","","","","","","",""];
var rad3namn = ["","","","","","","","","","","","","","","","","","","","",""];
var rad1tnr = [];
var rad2tnr = [];
var rad3tnr = [];
var namn = "";
var raden;
var platsen = 0;
var tnr = "";
var x;
var klick = true;
var y;

function loadfunction(){
	
}

function anmalan(rad, plats){
	x = "p" + rad + plats; 
	raden = rad;
	platsen = plats;
	document.getElementById("input").style.display = "block";
	document.getElementById("bordnummer").innerHTML = rad + "." + plats;
	namn = "";
	tnr = "";
	document.getElementById("namninput").value = "";
	document.getElementById("nrinput").value = "";
}

function avbryt(){
	document.getElementById("input").style.display = "none";
	
}
function inputnamn(val){
	namn = val;
}
function inputnr(val){
	tnr = val;
}

function anmal(){
	
	y = x + "a"
	
	document.getElementById(x).style.backgroundColor = "red";
	document.getElementById(y).innerHTML = namn;
	 switch(raden)
		{
			case '1':
				rad1namn[platsen-1] = namn;
				rad1tnr[platsen-1] = tnr;
				break;
			case '2':
				rad2namn[platsen-1] = namn;
				rad2tnr[platsen-1] = tnr;
				break;
			case '3':
				rad3namn[platsen-1] = namn;
				rad3tnr[platsen-1] = tnr;
				break;
		document.getElementById("input").style.display = "none";
	}

}
