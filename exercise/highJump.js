function jump(input) {
    let jumpGoal = Number(input[0]);
    let firstJump = jumpGoal - 30;
    let jumpCount = 0;
    let failedJumps = 0;

    for(let i = 1; i < input.length; i++) {
        let currentJump = Number(input[i]);

        if(currentJump > firstJump) {
            jumpCount++;
            failedJumps = 0;
            if(currentJump > jumpGoal && firstJump >= jumpGoal) {
                console.log(`Tihomir succeeded, he jumped over ${jumpGoal}cm after ${jumpCount} jumps.`);
                break;
            }   

            firstJump += 5;
        } else {
            failedJumps++;
            jumpCount++;
            if(failedJumps == 3) {
                console.log(`Tihomir failed at ${firstJump}cm after ${jumpCount} jumps.`);
                break;
            }
        }

    }
}

jump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])