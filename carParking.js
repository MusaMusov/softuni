function vetParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    
    let daysCount = 0;
    let sum = 0;
    for (let curDay = 1; curDay <= days; curDay++) {
 
        daysCount++;
        let dayCost = 0;
        for (let curHour = 1; curHour <= hours; curHour++) {
            let isDayEven = false;
            let isHourEven = false;
            if (curHour % 2 === 0) {
                isHourEven = true
           }
           if (curDay % 2 === 0) {
                isDayEven = true
           }
           if (isDayEven === true && isHourEven === false) {
               sum+=2.5
               dayCost += 2.5
           }else if (isDayEven === false && isHourEven === true) {
               sum+=1.25
               dayCost += 1.25
           }else{
               sum+= 1
               dayCost += 1
            }
        }
        console.log(`Day: ${daysCount} - ${dayCost.toFixed(2)} leva`);
 
    }
    console.log(`Total: ${sum.toFixed(2)} leva`)
 
}
vetParking(['2','5'])