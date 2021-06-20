//Global vars

var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var time = document.getElementById("time");

//Interval of time for run the clock

setInterval(function runTime(){
   
    //time run
    //...
    //Local vars
    let timeNow = new Date();
    let h = timeNow.getHours();
    let m = timeNow.getMinutes();
    let s = timeNow.getSeconds();

    //...
    //for 0 in hours
    if(h <=9){
        hours.innerText = "0" + h + "0";
    }else{
        hours.innerText = h + ":";
    }
    //for 0 in minutes
    if(m <= 9){
        minutes.innerText = "0" + m + ":";
    }else{
        minutes.innerText = m + ":";
    }
    //...
    //for 0 in seconds
    if(s <=9){
        seconds.innerText = "0" + s;
    }else{
        seconds.innerText = s;
    }
    //...
    //setting of PM or AM
    if(h >=13){
        time.innerText = "PM"
    }else{
        time.innerText = "AM"
    }
}, 1000)
