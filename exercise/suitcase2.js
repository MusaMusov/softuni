function suitcase(input) {
    let index = 0;
    let capacity = Number(input[index])
    index++;
    let suitcaseVolume = Number(input[index]);
    index++;
    let suitcaseCount = 0;
    let totalCaseCounter = 0;
    while (suitcaseVolume !== "End") {
    
    suitcaseCount++;
    if (suitcaseCount % 3 === 0) {
        suitcaseVolume *= 1.1
    }

    if (capacity >= suitcaseVolume) {
        capacity-=suitcaseVolume
    }else{
        break;
    }
    
    totalCaseCounter++;
 
    suitcaseVolume = input[index];
    index++;

    }
    if (suitcaseVolume === "End") {
     console.log(`Congratulations! All suitcases are loaded!`);
     console.log(`Statistic: ${totalCaseCounter} suitcases loaded.`);
    } else if (suitcaseVolume !== "End"){
     console.log("No more space!");
     console.log(`Statistic: ${totalCaseCounter} suitcases loaded.`);
    }
 

}

suitcase(["700.5",
"180",
"340.6",
"126",
"220"
])

