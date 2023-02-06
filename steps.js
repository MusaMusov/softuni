function stepsPerDay(input) {
    let index = 0;
    let steps = input[index];
    index++;
    let totalSteps = 0;
    while(steps !== "Going home") {
        steps = Number(input[index - 1]);
        totalSteps += steps;
        if(totalSteps >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - 10000} steps over the goal!`);
            return;
        }
        steps = Number(input[index])
        index++;
    }
 



    if (steps === "Going home") {
        totalSteps += input[input.length - 1];
        console.log(`${10000 - totalSteps} more steps to reach goal.`);
        return;
    }

}

stepsPerDay
(["1500", "300", "2500", "3000", "Going home", "200"]) 