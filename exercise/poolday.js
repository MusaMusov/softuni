function walking(input) {
    let index = 0;
    let steps = input[index];
    index++;
    let stepGoals = 10000;
    let sumofSteps = 0;
    while (steps !== "Going home") {
        let stepsinLoop = Number(steps);
        sumofSteps += stepsinLoop;
        if(sumofSteps >= stepGoals) {
            break;
        }

        steps = input[index];
        index++;
    }
    if (sumofSteps >= stepGoals) {
        console.log( "Goal reached! Good job!");
        console.log(`${Math.abs(sumofSteps - stepGoals)} steps over the goal!`);

    }else if(stepGoals > sumofSteps){
        let stepsToHome = Number(input[input.length - 1]);
        sumofSteps += stepsToHome

        if(stepGoals > sumofSteps){
            console.log(`${Math.abs(sumofSteps - stepGoals)} more steps to reach goal.`);
        } else {
            console.log( "Goal reached! Good job!");
            console.log(`${Math.abs(sumofSteps - stepGoals)} steps over the goal!`);
        }
    }
 
}

walking(["1500", "3000", "250", "1548","2000", "Going home", "2000"]) 