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
    while (sec >= 60){
       sec = (sec - 60);
       min = min + 1;
    }
    console.log(`"${hour}:${min}:${sec}"`);
}

digitalClock(5025) // "01:23:45"
digitalClock(61201) // "17:00:01"
digitalClock(87000) // "00:10:00"