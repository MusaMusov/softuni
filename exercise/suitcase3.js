function suitcase(input) {
    let index = 0;
    let capacity = Number(input[index])
    index++;
    let suitcaseVolume = Number(input[index]);
    index++;
    let suitcaseCount = 0;
    while (suitcaseVolume !== "End") {
        
        if (capacity > suitcaseVolume) {
            capacity-=suitcaseVolume
        }else{
            break;
        }
 
        suitcaseCount++;
      if (suitcaseCount === 3) {
         suitcaseVolume*=1.1
      }
 
      suitcaseVolume = input[index];
      index++;
    }
    if (suitcaseVolume === "End") {
     console.log(`Congratulations! All suitcases are loaded!`);
     console.log(`Statistic: ${suitcaseCount} suitcases loaded.`);
    }else if (suitcaseVolume !== "End"){
     console.log("No more space!");
     console.log(`Statistic: ${suitcaseCount} suitcases loaded.`);
    }
 
 }