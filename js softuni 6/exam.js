function exam(input) {
    let startHour = Number(input[0]);
    let startMins = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMins = Number(input[3]);
    let arriveTotalInMins = arriveHour * 60 + arriveMins; //9:30 10:00
    let startTotalInMins = startHour * 60 + startMins;

    if(startTotalInMins < arriveTotalInMins) {
        console.log("Late")
    } else if(startTotalInMins > (arriveTotalInMins + 30)) { 
        console.log("Early");
    } else if(startTotalInMins === arriveTotalInMins || startTotalInMins >= (arriveTotalInMins - 30))  {
        console.log("On Time")
    }

    let minutesTotalEarly = startTotalInMins - arriveTotalInMins;
    let minutesTotalLate = minutesTotalEarly * -1;
    let hoursEarly = Math.floor(minutesTotalEarly / 60);
    let hoursLate = Math.floor(minutesTotalLate / 60);
    let minutesEarly = minutesTotalEarly % 60;
    let minutesLate = minutesTotalLate % 60;

    if(minutesTotalEarly < 60 && minutesTotalEarly >= 0){
        console.log(`${minutesTotalEarly} minutes before the start`)
    } else if(hoursEarly >= 1) {
        if(minutesEarly < 10) {
            console.log(`${hoursEarly}:0${minutesEarly} hours before the start`);
        } else {
            console.log(`${hoursEarly}:${minutesEarly} hours before the start`);
        }
    } else if(minutesTotalLate < 60 && minutesTotalLate >= 0) {
        console.log(`${minutesTotalLate} minutes after the start`);
    } else if(hoursLate >= 1) {
        if(minutesLate < 10) {
            console.log(`${hoursLate}:0${minutesLate} hours after the start`);
        } else {
            console.log(`${hoursLate}:${minutesLate} hours after the start`);
        }
    }
}

exam(["11","30","12","29"])








// else if(startTotalInMins > (arriveTotalInMins - 30)) {
    // console.log("Early")