function comissionsTask(input) {
    let city = input[0];
    let amount = Number(input[1]);
    let comissions = 0;
    switch(city) {
        case "Sofia" :
            if(amount >= 0 && amount <= 500) {
                comissions = 5/100 * amount;
            } else if(amount >= 500 && amount <= 1000) {
                comissions = 7/100 * amount;
            } else if(amount >= 1000 && amount <= 10000) {
                comissions = 8/100 * amount;
            } else if(amount >= 10000) {
                comissions = 12/100 * amount;
            } 
            console.log(comissions.toFixed(2))
            break;
        case "Varna" :
            if(amount >= 0 && amount <= 500) {
                comissions = 4.5/100 * amount;
            } else if(amount >= 500 && amount <= 1000) {
                comissions = 7.5/100 * amount;
            } else if(amount >= 1000 && amount <= 10000) {
                comissions = 10/100 * amount;
            } else if(amount >= 10000) {
                comissions = 13/100 * amount;
            } 
            console.log(comissions.toFixed(2))
           break;
        case "Plovdiv" :
            if(amount >= 0 && amount <= 500) {
                comissions = 5.5/100 * amount;
            } else if(amount >= 500 && amount <= 1000) {
                comissions = 8/100 * amount;
            } else if(amount >= 1000 && amount <= 10000) {
                comissions = 12/100 * amount;
            } else if(amount >= 10000) {
                comissions = 14.5/100 * amount;
            } else {
                console.log("error")
            } 
                console.log(comissions.toFixed(2))
                break;
            default: console.log("error")
    }  
}

comissionsTask(["Plovdiv","-20"])