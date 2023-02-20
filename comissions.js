// Град       0 ≤ s ≤ 500    500 < s ≤ 1 000    1 000 < s ≤ 10 000     s > 10 000
// 
// Sofia       5% 7% 8% 12%
// 
// Varna       4.5% 7.5% 10% 13%
// 
// Plovdiv       5.5% 8% 12% 14.5% 

function comissions(input) {
    let city = input[0];
    let sales = Number(input[1]);

    switch(city) {
        case "Sofia" :
            if(sales < 0) {
                console.log("error");
            } else if(sales <= 500) {
                sales *= 0.05;
            } else if(sales <= 1000) {
                sales *= 0.07;
                // sales = sales * 0.07
            } else if(sales <= 10000) {
                sales *= 0.08;
            } else if(sales > 10000) {
                sales *= 0.12;
            }
            break;
        case "Varna" :
            if(sales < 0) {
                console.log("error");
            } else if(sales <= 500) {
                sales *= 0.045;
            } else if(sales <= 1000) {
                sales *= 0.075;
                // sales = sales * 0.07
            } else if(sales <= 10000) {
                sales *= 0.1;
            } else if(sales > 10000) {
                sales *= 0.13;
            }
            break;
        case "Plovdiv" :
            if(sales < 0) {
                console.log("error");
            } else if(sales <= 500) {
                sales *= 0.055;
            } else if(sales <= 1000) {
                sales *= 0.08;
                // sales = sales * 0.07
            } else if(sales <= 10000) {
                sales *= 0.12;
            } else if(sales > 10000) {
                sales *= 0.145;
            }
            break;
        default: 
            console.log("error");
            return;
    }

    console.log(sales.toFixed(2));
}

comissions
(["Varna", "3874.50"])