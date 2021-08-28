const time = () => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // console.log(hours, minutes, seconds);


    //---------- Method 1 ------------//
    
    if(hours == "12") {
        var hr = 12;
    } else if (hours == "24") {
        var hr = 0;
    }else{
        var hr = hours % 12; // Find current hour
    }

    if (hr<10) {
        hr = "0" + hr;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    var ampm = hours < 12 ? 'AM' : 'PM';  
    var timed = hr + ":" + minutes + ":" + seconds + " " + ampm;
    document.getElementById("clock").innerText = timed;


    //---------- Method 2 ------------//

    // var ampm = hours >= 12 ? 'PM' : 'AM';
    // hours = hours % 12;
    // hours = hours ? hours : 12; // the hour '0' should be '12'
    // minutes = minutes < 10 ? '0'+ minutes : minutes;
    // seconds = seconds < 10 ? '0'+ seconds : seconds;
    // var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    // document.getElementById("clock").innerText = strTime;

}

// time();

setInterval(time, 1000); //1000 miliseconds equal 1 second


