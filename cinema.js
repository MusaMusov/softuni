function cinema(input) {
    let index = 0;
    let command = input[index];
    index++;


    while(command !== "Finish") {
        let movie = command;
        let places = input[index];
        index++;
        let ticketType = input[index];
        index++;
        let studentTicket = 0;
        let standardTicket = 0;
        let kidsTicket = 0;

        while(ticketType !== "End") {
            let currTicket = ticketType;
            if(currTicket === "student") {
                studentTicket++
            }else if(currTicket === "standard") {
                standardTicket++
            } else {
                kidsTicket++
            }

            ticketType = input[index];
            index++;
        }
        console.log(studentTicket + standardTicket + kidsTicket)
        movie = input[index];
        index++;
    }
}

cinema
(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"
])