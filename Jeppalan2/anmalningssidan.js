// JavaScript Document
var namn = "";
var raden;
var platsen;
var tnr = "";
var x;
var y;
var nr;
var person;

function deleteCookie(cname){
	document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function removeAllCookies(){
	document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
}
function clearSeats(){
	var p = document.getElementsByClassName("plats");
		var i;
		for (i = 0; i < p.length; i++) {
    		p[i].style.backgroundColor = "White";
		}
}
function avanmalning(p){
	nr = document.getElementById("nrinput2").value;
	
	for(var i = 0; i < 20; i++){
		x = p + (i+1);
		var kaka = getCookie(x + "nr");
		if(kaka == nr){
			person = getCookie(x);
			deleteCookie(x);
			deleteCookie(x + "nr");
			document.getElementById(x).style.backgroundColor = "white";
		}
	}
	
}
function anmälda(p){
	
	for(var i = 0; i<20; i++){
		x = p + (i+1);
		y = x + "a";	
		document.getElementById(y).innerHTML = "Namn: " + getCookie(x) + " Telnr: " + getCookie(x + "nr");
	}
}


function kör(){
	anmälda("p1");
	anmälda("p2");
	anmälda("p3");
}

function refresh(){
	for(var i = 0; i<20; i++){
		x = "p1" + (i+1);
		if(getCookie(x) != ""){
			document.getElementById(x).style.backgroundColor = "red";
		}
		x = "p2" + (i+1);
		if(getCookie(x) != ""){
			document.getElementById(x).style.backgroundColor = "red";
		}
		x = "p3" + (i+1);
		if(getCookie(x) != ""){
			document.getElementById(x).style.backgroundColor = "red";
		}

	}
}

function anmalan(rad, plats){
	
	x = "p" + rad + plats; 
	raden = rad;
	platsen = plats;
	
	if(document.getElementById(x).style.backgroundColor == "red"){
		var e = document.cookie;
		alert(e);
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
		document.getElementById("input").style.display = "none";
		document.getElementById(x).style.backgroundColor = "red";
		setCookie(x, namn, 365);
		setCookie(x + "nr", tnr, 365);
		
	}
	else{
		window.alert("Fyll i fälten");
		}
	}

function avnml(){
	
	nr = document.getElementById("nrinput2").value;
	
	if(nr == "RemoveAll"){
		removeAllCookies();
		clearSeats();
		document.getElementById("duar").innerHTML = "Alla avanmälda";
}
	
	else{
		avanmalning("p1");
		avanmalning("p2");
		avanmalning("p3");
		
		if(person != undefined){
			document.getElementById("duar").innerHTML = "\""+ person + "\"" + " avanmäld";
		}
		else{
			document.getElementById("duar").innerHTML = "Ej hittad";
		}
		
	person = undefined;	
	}
	
	document.getElementById("nrinput2").value = "";
	document.getElementById("duar").style.display = "block";

}
