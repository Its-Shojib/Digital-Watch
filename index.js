function myTime(){
    let myDate = new Date();

    let hr,min = (myDate.getMinutes()<10) ? "0"+myDate.getMinutes() : myDate.getMinutes(),
    sec = (myDate.getSeconds()<10) ? "0"+myDate.getSeconds() : myDate.getSeconds(),
    AmPm = (myDate.getHours() <12) ? "AM" : "PM";

    if(myDate.getHours() == 0){
        hr = 12;
    }
    else if(myDate.getHours() >12){
        hr =myDate.getHours() -12;
    }
    else{
        hr =myDate.getHours();
    }
    let currentTime = hr +" : "+min+" : "+sec+" "+AmPm;
    document.getElementById('time').innerHTML = currentTime;
    
    let myDay = ["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"],
    myMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"],
    day = myDate.getDate();

    let currentDate = myDay[myDate.getDay()] + ", " + myMonth[myDate.getMonth()]+ " " + day;
    document.getElementById('day').innerHTML = currentDate;
}

myTime();
setInterval(function(){
    myTime();
},1000);
