var t=setInterval(move,5);
var pos=500;
var capanim = document.getElementById("capanim");

function move() {
	if (pos>=800) {
		clearInterval(t);
	}
	else{
		pos ++;
		capanim.style.top= "-"+ pos + "px";
	}
};
