function football (input){
    let team = input[0];
    let souvenier = input[1];
    let amount = Number(input[2]);
    let sum = 0;

    if(team === "Argentina") {
        switch(souvenier) {
            case "flags" :
                sum = amount * 3.25;
                break;
            case "caps" :
                sum = amount * 7.20;
                break;
            case "posters" :
                sum = amount * 5.10;
                break;
            case "stickers" :
                sum = amount * 1.25;
                break;
            default : 
                console.log("Invalid stock!");
                return;
        }
    } else if(team === "Brazil") {
        switch(souvenier) {
            case "flags" :
                sum = amount * 4.20;
                break;
            case "caps" :
                sum = amount * 8.50;
                break;
            case "posters" :
                sum = amount * 5.35;
                break;
            case "stickers" :
                sum = amount * 1.20;
                break;
            default : 
                console.log("Invalid stock!");
                return;
        }

    } else if(team === "Croatia") {
        switch(souvenier) {
            case "flags" :
                sum = amount * 2.75;
                break;
            case "caps" :
                sum = amount * 6.90;
                break;
            case "posters" :
                sum = amount * 4.95;
                break;
            case "stickers" :
                sum = amount * 1.10;
                break;
            default : 
                console.log("Invalid stock!");
                return;
        }
        
    } else if(team === "Denmark") {
        switch(souvenier) {
            case "flags" :
                sum = amount * 3.10;
                break;
            case "caps" :
                sum = amount * 6.50;
                break;
            case "posters" :
                sum = amount * 4.80;
                break;
            case "stickers" :
                sum = amount * 0.90;
                break;
            default : 
                console.log("Invalid stock!");
                return;
        }

    } else {
        console.log("Invalid country!");
        return;
    }

    console.log(`Pepi bought ${amount} ${souvenier} of ${team} for ${sum.toFixed(2)} lv.`);
}

football(["Brazil",
"stickers",
"5"])