var seconds=0
let minutes=0


function counter(){
    seconds++;
    document.getElementById("timer").innerHTML = seconds +" "+ "MINUTES" + " "+ "PASSED";
}

window.setInterval(counter,1000);

function showtime(){
	setTimeout(function () {document.getElementById('frame1').style.visibility='visible'}, 0);
	setTimeout(function () {document.getElementById('frame1').style.visibility='hidden'}, 10000);
	setTimeout(function () {document.getElementById('frame2').style.visibility='visible'}, 10000);
	setTimeout(function () {document.getElementById('frame2').style.visibility='hidden'}, 20000);
	setTimeout(function () {document.getElementById('frame3').style.visibility='visible'}, 20000);
	setTimeout(function () {document.getElementById('frame3').style.visibility='hidden'}, 30000);
	setTimeout(function () {document.getElementById('frame4').style.visibility='visible'}, 30000);
	setTimeout(function () {document.getElementById('frame4').style.visibility='hidden'}, 40000);
	setTimeout(function () {document.getElementById('frame5').style.visibility='visible'}, 40000);
	setTimeout(function () {document.getElementById('frame5').style.visibility='hidden'}, 9999000);
}

/*
function showtime(){
	setTimeout(function () {document.getElementById('frame1').style.visibility='visible'}, 0);
	setTimeout(function () {document.getElementById('frame1').style.visibility='hidden'}, 120000);
	setTimeout(function () {document.getElementById('frame2').style.visibility='visible'}, 120000);
	setTimeout(function () {document.getElementById('frame2').style.visibility='hidden'}, 1800000);
	setTimeout(function () {document.getElementById('frame3').style.visibility='visible'}, 1800000);
	setTimeout(function () {document.getElementById('frame3').style.visibility='hidden'}, 10260000);
	setTimeout(function () {document.getElementById('frame4').style.visibility='visible'}, 10260000);
	setTimeout(function () {document.getElementById('frame4').style.visibility='hidden'}, 114000000);
	setTimeout(function () {document.getElementById('frame5').style.visibility='visible'}, 114000000);
	setTimeout(function () {document.getElementById('frame5').style.visibility='hidden'}, 999999999999);
*/

if(seconds == 0){
	showtime()
}


if (seconds >= 3) {
    var element = document.getElementById("frame1");
        element.style.opacity = "0.2";
};
    
