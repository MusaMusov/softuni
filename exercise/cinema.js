function cinema (input) {
    let index = 0;
    let command = input[index];
    index++;
    let kidTicket = 0;
    let studentTicket = 0;
    let standardTicket = 0;
    let ticketCounter = 0;
    let places = 0;

    while(command !== "Finish") {
        let totalTickets = Number(input[index]); 
        index++;
        let currentTicket = input[index];
        index++;
        places += totalTickets;

        while(currentTicket !== "End") {
            let ticketType = currentTicket;
           
            if(ticketType === "kid") {
                kidTicket++;
            } else if(ticketType === "student") {
                studentTicket++;
            } else if(ticketType === "standard"){
                standardTicket++;
            }

            if(ticketType === "Finish") {
                break;
            }
            ticketCounter++;

            currentTicket = input[index];
            index++;
        }
        if(currentTicket === "Finish") {
            break;
        }
        

        let totalTicketsBought = 0;
        totalTicketsBought += ticketCounter;
        
        console.log(`${currentTicket} - ${totalTicketsBought / places * 100}% full.`);
        command = input[index];
        index++;
        
    }
    console.log(`Total tickets: ${ticketCounter}`);
    console.log(`${(studentTicket / ticketCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTicket / ticketCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicket / ticketCounter * 100).toFixed(2)}% kid tickets`);
}

cinema
(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])