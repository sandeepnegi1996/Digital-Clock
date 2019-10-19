console.log(new Date());


function clock()
{
    var fulldate=new Date();

    var hours=fulldate.getHours();
    var minutes=fulldate.getMinutes();
    var seconds=fulldate.getSeconds();
    var ampm= "AM";
    
    if(hours>12){
        ampm="PM";
        hours-=12;
    }
    
    if (hours<10) 
    {
        hours="0"+ hours;   
    }
    else if (minutes<10) 
    {

        minutes="0" + minutes;
        
    }
    else if (seconds<10)
    {
        seconds="0"+seconds;    
    }

    document.getElementById("hour").innerHTML=hours+":";

    document.getElementById("minute").innerHTML=minutes+":";

    document.getElementById("second").innerHTML=seconds;
    
    document.getElementById("ampm").innerHTML=ampm;

}
 


setInterval(clock,1000);
