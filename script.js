var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var clock = () =>{
    setInterval(()=>{
        let date = new Date(); 
        let hour_value = date.getHours()
        let minute_value = date.getMinutes()
        let seconds_value = date.getSeconds()

        if(hour_value>12){
            hour_value = hour_value - 12;
        }

        hours.innerHTML = hour_value > 9 ? hour_value : '0'+ hour_value;
        minutes.innerHTML = minute_value > 9 ? minute_value : '0'+ minute_value;
        seconds.innerHTML = seconds_value > 9 ? seconds_value : '0'+ seconds_value;
    },1000)
}

clock();