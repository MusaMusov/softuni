function easterComp (input) {
    let index = 0;
    let clients = Number(input[index]);
    index++;
    let totalMoneyEarned = 0;
    for(let i = 1; i <= clients; i++) {
        let command = input[index];
        index++;
        let moneyPerClient = 0;
        let itemCounter = 0;
        while(command !== "Finish") {
            let currentItem = command;
            

            switch(currentItem) {
                case "basket":
                    moneyPerClient += 1.5;
                    itemCounter++;
                    break;
                case "wreath":
                    moneyPerClient += 3.8;
                    itemCounter++;
                    break;
                case "chocolate bunny":
                    moneyPerClient +=7;
                    itemCounter++;
                    break;
            }
            
            command = input[index];
            index++;
            
        }
        if(itemCounter % 2 === 0) {
            moneyPerClient *= 0.8;
        }
        totalMoneyEarned += moneyPerClient
       
            console.log(`You purchased ${itemCounter} items for ${moneyPerClient.toFixed(2)} leva.`);
        
        
        
    }   
    let average = totalMoneyEarned / clients;
    console.log(`Average bill per client is: ${average.toFixed(2)} leva.`);

}

easterComp(["2",
"basket",
"wreath",
"chocolate bunny",
"Finish",
"wreath",
"chocolate bunny",
"Finish"])