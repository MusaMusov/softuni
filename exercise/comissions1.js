function tradeComissions (input){
    let town = input[0];
    let comissions = Number (input[1]);
    let totalprofit = 0;
 
    switch (town) {
        case "Sofia":
            if (comissions <= 500) {
                totalprofit = comissions * 0.05;
            }else if (comissions <= 1000) {
                totalprofit = comissions * 0.07;
            }else if (comissions <= 10000) {
                totalprofit = comissions * 0.08;
            }else if (comissions > 10000) {
                totalprofit = comissions * 0.12;
            }
            console.log(totalprofit.toFixed(2));
            break;
        case "Varna":
            if (comissions <= 500) {
                totalprofit = comissions * 0.0450;
            }else if (comissions <= 1000) {
                totalprofit = comissions * 0.075;
            }else if (comissions <= 10000) {
                totalprofit = comissions * 0.10;
            }else if (comissions > 10000) {
                totalprofit = comissions * 0.13;   
            }console.log(totalprofit.toFixed(2));
            break;
        case "Plovdiv":
                 if (comissions <= 500) {
                    totalprofit = comissions * 0.055;
                }else if (comissions <= 1000) {
                    totalprofit = comissions * 0.08;
                }else if (comissions <= 10000) {
                    totalprofit = comissions * 0.12;
                }else if (comissions > 10000) {
                    totalprofit = comissions * 0.145;
                } 
                    if(comissions <= 0) {
                        console.log("error");
                    } else {
                        console.log(totalprofit.toFixed(2));
                    }
                
                break; 
                default: console.log("error");
    }
}
tradeComissions (["Sofia","1500"])