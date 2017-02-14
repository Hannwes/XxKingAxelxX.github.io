// JavaScript Document

function textbyte(val){
	
	if(isNaN(val) && val != ""){
		document.getElementById("textinput").value = "";
		document.getElementById("ptagg").innerHTML = "";
		alert("INTE ETT TAL");
	}
	else{
	document.getElementById("ptagg").innerHTML = val;
	}
}
