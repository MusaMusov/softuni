function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let destination = "";
    let place = ""


    if(budget <= 100) {
        destination = "Bulgaria";
        switch(season) {
            case "summer" :
                price = 30/100 * budget;
                break;
            case "winter" :
                price = 70/100 * budget;
                break;
        }
    } else if(budget <= 1000) {
        destination = "Balkans";
            switch(season) {
                case "summer" :
                    price = 40/100 * budget;
                    break;
                case "winter" :
                    price = 80/100 * budget;
                    break;
        } 
    } else {
        destination = "Europe";
        price = 90/100 * budget;
    }

    if(destination === "Bulgaria" || destination === "Balkans") {
        switch(season) {
            case "summer" :
                place = "Camp";
                break;
            case "winter" :
                place = "Hotel" ;
                break;
        } 
        
    } else {
        place = "Hotel"
    }



    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${price.toFixed(2)}`)
}  

journey(["1500", "summer"])