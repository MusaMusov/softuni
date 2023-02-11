function stepsPerDay(input) {
    let index = 0;
    let steps = input[index];
    index++;
    let totalSteps = 0;
    while(steps !== "Going home") {
        steps = Number(index);
        totalSteps += steps;
        if(totalSteps >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - 10000} steps over the goal!`);
            return;
        }
        steps = input[index]
        index++;
    }
 
    if (steps === "Going home") {
        totalSteps += input[input.length - 1];
        console.log(`${(10000 - totalSteps) * -1} more steps to reach goal.`);
        return;
    }

}

stepsPerDay
(["1500", "300", "2500", "3000", "Going home", "200"]) 