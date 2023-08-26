function digitalClock(sec){
    let hour = 0;
    let min = 0;
    while (sec >= 86400){
        sec = (sec - 86400);
    }
    while (sec >= 3600){
        sec = (sec - 3600);
        hour = hour + 1;
    }
    if (hour < 10){
        hour = `0${hour}`
    }
    while (sec >= 60){
       sec = (sec - 60);
       min = min + 1;
    }
    if (min < 10){
        min = `0${min}`
    }
    if (sec < 10){
        sec = `0${sec}`
    }
    console.log(`"${hour}:${min}:${sec}"`);
}

digitalClock(5025) // "01:23:45"
digitalClock(61201) // "17:00:01"
digitalClock(87000) // "00:10:00"