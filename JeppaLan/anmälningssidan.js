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

function loadfunction(){
}

function anmalan(rad, plats){
	raden = rad;
	platsen = plats;
	
	if(rad1namn[plats - 1] != ""){
			document.getElementById("input").style.display = "none";

	}
	else if(rad2namn[plats - 1] != ""){
			document.getElementById("input").style.display = "none";

	}
	else if(rad3namn[plats - 1] != ""){
			document.getElementById("input").style.display = "none";

	}

	else{
	document.getElementById("input").style.display = "block";
	document.getElementById("bordnummer").innerHTML = rad + "." + plats;

	namn = "";
	tnr = "";
	document.getElementById("namninput").value = "";
	document.getElementById("nrinput").value = "";
		
}
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

	if(namn != "" && tnr != ""){
	switch(raden)
		{
			case '1':
				rad1namn[platsen-1] = namn;
				rad1tnr[platsen-1] = tnr;
				x = "p1" + platsen;
				document.getElementById(x).style.backgroundColor = "red";
				
				break;
			case '2':
				rad2namn[platsen-1] = namn;
				rad2tnr[platsen-1] = tnr;
				x = "p2" + platsen;
				document.getElementById(x).style.backgroundColor = "red";
				break;
			case '3':
				rad3namn[platsen-1] = namn;
				rad3tnr[platsen-1] = tnr;
				x = "p3" + platsen;
				document.getElementById(x).style.backgroundColor = "red";
				break;
		}
		document.getElementById("input").style.display = "none";
	}
	else{
		window.alert("Fyll i namn och telefonnummer");
	}
}
