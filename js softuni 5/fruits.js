function solve(input) {
    let product = input[0];
    let den = input[1];
    let broi = Number(input[2])
    let sum = 0; // Give default value to variable
    switch (den) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (product) {
                case "banana":
                    sum = broi * 2.5
                    break;
                case "apple":
                    sum = broi * 1.2
                    break;
                case "orange":
                    sum = broi * 0.85
                    break;
                case "grapefruit":
                    sum = broi * 1.45
                    break;
                case "kiwi":
                    sum = broi * 2.7
                    break;
                case "pineapple":
                    sum = broi * 5.5
                    break;
                case "grapes":
                    sum = broi * 3.85
                    break;
                default:
                    console.log("error")
                    break;
 
            }break;
        case "Saturday":
        case "Sunday":
            switch (product) {
                case "banana":
                    sum = broi * 2.70
                    break;
                case "apple":
                    sum = broi * 1.25
                    break;
                case "orange":
                    sum = broi * 0.90
                    break;
                case "grapefruit":
                    sum = broi * 1.60
                    break;
                case "kiwi":
                    sum = broi * 3.00
                    break;
                case "pineapple":
                    sum = broi * 5.60
                    break;
                case "grapes":
                    sum = (broi * 4.20)
                    break;
                default:
                    console.log("error")
                    break;
 
            }break;
        default:
            console.log("error")
            break;
    }
    if(sum != 0){  // add check
    console.log(`${sum.toFixed(2)}`);
    }

    }

