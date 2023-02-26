function gymnastics(input) {
    let country = input[0];
    let tool = input[1];

    let totalPoints = 0;
    switch(country) {
        case "Bulgaria" :
            if(tool === "ribbon") {
                totalPoints += (9.6 + 9.4)
            } else if(tool === "hoop") {
                totalPoints += (9.550 + 9.750)
            } else {
                totalPoints += (9.5 + 9.4) 
            }
            break;
        case "Russia" :
            if(tool === "ribbon") {
                totalPoints += (9.1 + 9.4)
            } else if(tool === "hoop") {
                totalPoints += (9.3 + 9.8)
            } else {
                totalPoints += (9.6 + 9.0) 
            }
            break;
        case "Italy" :
            if(tool === "ribbon") {
                totalPoints += (9.2 + 9.5)
            } else if(tool === "hoop") {
                totalPoints += (9.450 + 9.350)
            } else {
                totalPoints += (9.7 + 9.150) 
            }
            break;
    }
    let percent = 100 - (totalPoints * 5);
    console.log(`The team of ${country} get ${totalPoints.toFixed(3)} on ${tool}.`)
    console.log(`${percent.toFixed(2)}%`)
}

gymnastics(["Bulgaria",
"ribbon"])