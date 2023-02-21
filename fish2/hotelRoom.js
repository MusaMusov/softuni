function demo(input){
    let month = input [0];
    let numberOfNights = Number(input[1]);
    let priceForApartment = 0;
    let priceForStudio = 0;
    if (month === "May" || month === "October") {
        priceForApartment = 65;
        priceForStudio = 50;
    } else if (month === "June" || month === "September") {
        priceForApartment = 68.70;
        priceForStudio = 75.20;
    } else if (month === "July" || month === "August") {
        priceForApartment = 77;
        priceForStudio = 76;
    }

    if(numberOfNights > 14) {
        priceForApartment *= 0.9;
    }
    if (month === "May" || month === "October"){
        if(numberOfNights > 14) {
        priceForStudio *= 0.7;
        }
    } else if (month === "May" || month === "October"){
        if(numberOfNights > 14) {
            priceForStudio *= 0.95;
        }
    } else if (month === "June" || month === "September"){
        if(numberOfNights > 14) {
            priceForStudio *= 0.8;
        }
    }
    let finalPriceforApartment = priceForApartment * numberOfNights
    let finalPriceforStudio = priceForStudio * numberOfNights
    console.log(`Apartment: ${finalPriceforApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${finalPriceforStudio.toFixed(2)} lv.`);
     
}
demo(["June","14"]);