function suitcase (input) {
    let index = 0;
    let bootCapacity = input[index];
    index++;

    let command = input[index];
    index++;
    let isEnough = true;

    let caseCounter = 0;
    let totalCaseCounter = 0;

    while(command !== "End") {
        let currentCapacity = Number(command);
        caseCounter++;
        if(caseCounter === 3) {
            currentCapacity *= 1.1;
            caseCounter = 0;
        }

       
        if(currentCapacity > bootCapacity) {
            isEnough = false;
            break;
        } else {
            bootCapacity -= currentCapacity;
        }
        
        totalCaseCounter++;
        command = input[index];
        index++;
    }

    if (command === "End") {
        console.log("Congratulations! All suitcases are loaded!");
    }
    
    if(isEnough === false) {
        console.log("No more space!");
    }
    console.log(`Statistic: ${totalCaseCounter} suitcases loaded.`);
}

suitcase(["550",
"100",
"252",
"72",
"End"])