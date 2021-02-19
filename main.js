
//create a countdown timer, hold the date we want the timer to run down to
var countDownDate = new Date("Feb 23, 2021 09:00:01").getTime();

//use the setInterval() method to update our var
var myfunc = setInterval(function() {
//calculate the time difference between current date and end date. 
    var now = new Date().getTime();
    var timeleft = countDownDate - now; 

//Calculate the days, hours, minutes and seconds left     
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24 ));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

     // Result is output to the specific element
     document.getElementById("days").innerHTML = days + "d "
     document.getElementById("hours").innerHTML = hours + "h " 
     document.getElementById("mins").innerHTML = minutes + "m " 
     document.getElementById("secs").innerHTML = seconds + "s " 
         
     // Display the message when countdown is over
     if (timeleft < 0) {
         clearInterval(myfunc);
         document.getElementById("days").innerHTML = ""
         document.getElementById("hours").innerHTML = "" 
         document.getElementById("mins").innerHTML = ""
         document.getElementById("secs").innerHTML = ""
         document.getElementById("end").innerHTML = "You're 38!!";
     }
        }, 1000)
