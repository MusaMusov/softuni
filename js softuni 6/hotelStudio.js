function hotelStudioTask(input) {
    let month = input[0];
    let nightsOver = Number(input[1]);
    let apartmentPrice = 0;
    let studioPrice = 0;

    switch(month) {
        case "May" :
        case "October" :
            studioPrice = 50;
            apartmentPrice = 65;
            break;
        case "July" :
        case "August" :
            studioPrice = 76;
            apartmentPrice = 77;
            break;
        case "June" :
        case "September" :
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            break;
    }

    if(nightsOver > 14) {
        apartmentPrice *= 0.9;
        if(month === "May" || month === "October") {
            studioPrice *= 0.7;
        } else if(month === "June" || month === "September") {
            studioPrice *= 0.8;
        }
    } else if(nightsOver > 7) {
        if(month === "May" || month === "October") {
            studioPrice *= 0.95
        }
    }

    let totalApartmentPrice = nightsOver * apartmentPrice;
    let totalStudioPrice = nightsOver * studioPrice;

    console.log(`Apartment: ${totalApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`);
} 

hotelStudioTask(["May", "15"]) 




// if(nightsOver > 14 && month === "May" || month === "October") {
    // studioPrice *= 0.70;
// } else if(nightsOver > 7 && month === "May" || month === "October") {
    // studioPrice *= 0.95
// } else if(nightsOver > 14 && month === "June" || month === "September") {
    // studioPrice *= 0.8
// } else if(nightsOver > 14) {
    // apartmentPrice *= 0.9
// }