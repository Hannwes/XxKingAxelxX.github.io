// JavaScript Document
var antalsäljare = 1;
var antalnightshade = 0;
var antalljus = 0;
var antaltvål = 0;
var antalservetter = 0;
var totalt = 0;

function säljareFunc(val)
{
	antalsäljare = val;
	totalt = antalsäljare * (antalnightshade*20) + (antalservetter*10) + (antalljus*25) + (antaltvål*5);
	document.getElementById("Totalförtjänst").innerHTML = totalt;
}
function NightshadeFunc(val)
{
	antalnightshade = val;
	document.getElementById("nightbox").value = val;
	document.getElementById("nightrange").value = val;
	totalt = antalsäljare * (antalnightshade*20) + (antalservetter*10) + (antalljus*25) + (antaltvål*5);
	document.getElementById("Totalförtjänst").innerHTML = totalt;
}

function LjusFunc(val)
{
	antalljus = val;
	document.getElementById("ljusbox").value = val;
	document.getElementById("ljusrange").value = val;
	totalt = antalsäljare * (antalnightshade*20) + (antalservetter*10) + (antalljus*25) + (antaltvål*5);
	document.getElementById("Totalförtjänst").innerHTML = totalt;
}

function bambuFunc(val)
{
	antaltvål = val;
	document.getElementById("tvålbox").value = val;
	document.getElementById("tvålrange").value = val;
	totalt = antalsäljare * (antalnightshade*20) + (antalservetter*10) + (antalljus*25) + (antaltvål*5);
	document.getElementById("Totalförtjänst").innerHTML = totalt;
}

function ServetterFunc(val)
{
	antalservetter = val;
	document.getElementById("servettbox").value = val;
	document.getElementById("servettrange").value = val;
	totalt = antalsäljare * (antalnightshade*20) + (antalservetter*10) + (antalljus*25) + (antaltvål*5);
	document.getElementById("Totalförtjänst").innerHTML = totalt;
}
