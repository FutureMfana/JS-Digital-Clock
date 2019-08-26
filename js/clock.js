setInterval(showTimeDate, 1000);
function showTimeDate(){
    var date_ =  new Date();
    var mon = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    var days = new Array("Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat");

    //time creation
    var h = date_.getHours();
    var m = date_.getMinutes();
    var s = date_.getSeconds();

    if (h < 10){ h = "0" + h;}
    if (m < 10){ m = "0" + m;}
    if (s < 10){ s = "0" + s;}
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;

    //date creation
    var d = date_.getDate();
    var dd = date_.getDay();
    var mm = date_.getMonth();
    var yy = date_.getFullYear();

    document.getElementById("date").innerHTML = days[dd] +", " + d + "/" + mon[mm] + "/" + yy;
}