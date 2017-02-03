// JavaScript Document
var rad1namn = ["","","","","","","","","","","","","","","","","","","","",""];
var rad2namn = ["","","","","","","","","","","","","","","","","","","","",""];
var rad3namn = ["","","","","","","","","","","","","","","","","","","","",""];
var rad1tnr = [];
var rad2tnr = [];
var rad3tnr = [];
var namn = "";
var raden;
var platsen;
var tnr = "";
var x;


function anmalan(rad, plats){
	
	x = "p" + rad + plats; 
	raden = rad;
	platsen = plats;
	
	if(document.getElementById(x).style.backgroundColor == "red"){
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
				break;
			case '2':
				rad2namn[platsen-1] = namn;
				rad2tnr[platsen-1] = tnr;
				break;
			case '3':
				rad3namn[platsen-1] = namn;
				rad3tnr[platsen-1] = tnr;
				break;
	}
		document.getElementById("input").style.display = "none";
		document.getElementById(x).style.backgroundColor = "red";
	}
	else{
		window.alert("Fyll i fälten");
	}
}