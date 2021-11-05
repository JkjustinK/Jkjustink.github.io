var seconds=0
let minutes=0



function counter(){
    seconds++;
    document.getElementById("timer").innerHTML = seconds +" "+ "MINUTES" + " "+ "PASSED";

    if (seconds <= 120) {
        var element1 = document.getElementById("frame1");
        element1.style.display.none = block;
    console.log("test");
    }
    else if(seconds <=180){
        var element2 = document.getElementById("frame2");
        element2.style.display.none = block;
    }
    else if(seconds <=10260){
        var element2 = document.getElementById("frame2");
        element2.style.display.none = block;
    }
    else if(seconds <=11400){
        var element2 = document.getElementById("frame2");
        element2.style.display.none = block;
    }
    else {
        var element2 = document.getElementById("frame2");
        element2.style.display.none = block;
    }
}

window.setInterval(counter,1000)






