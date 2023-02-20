// function dayOfTheWeek(input) {
    // let day = Number(input[0]);
    // switch(day) {
        // case 1: console.log("Monday"); break;
        // case 2: console.log("Tuesday"); break;
        // case 3: console.log("Wednesday"); break;
        // case 4: console.log("Thursday"); break;
        // case 5: console.log("Friday"); break;
        // case 6: console.log("Saturday"); break;
        // case 7: console.log("Sunday"); break;
        // default: console.log("Error"); break;
    // }
// }
// 
// dayOfTheWeek([1])
// 
// Вход Изход 
// (["1"]) Monday 
// (["2"]) Tuesday 
// (["3"]) Wednesday 
// (["4"]) Thursday 
// (["5"]) Friday 
// (["6"]) Saturday 
// (["7"]) Sunday 
// (["-1"]) Error 


// function workingWeekendDays(input) {
    // let day = input[0];
    // switch(day) {
        // case "Monday" :
        // case "Tuesday" :
        // case "Wednesday" :
        // case "Thursday" :
        // case "Friday" : console.log("Working day"); break;
        // case "Saturday" :
        // case "Sunday" : console.log("Weekend"); break;
        // default: console.log("Error"); break;
    // }
// }
// 
// workingWeekendDays(["Monday"])\


// function fruitVegetable(input) {
    // let food = input[0];
    // switch(food) {
        // case "banana":
        // case "apple":
        // case "kiwi":
        // case "cherry":
        // case "lemon" :
        // case "grapes" : console.log("fruit"); break;
        // case "tomato" :
        // case "cucumber":
        // case "pepper" :
        // case "carrot" : console.log("vegetable"); break;
        // default: console.log("unknown")
    // }
// }
// 
// fruitVegetable(["apple"])


// function ageGender(input) {
    // let age = Number(input[0]);
    // let gender = input[1];
// 
    // if(age >= 16) {
        // if(gender === "f"){
            // console.log("Ms.")
        // }
        // else {
            // console.log("Mr.")
        // }
    // }
    // else {
        // if(gender === "f") {
            // console.log("Miss") 
        // }
        // else (
            // console.log("Master")
        // )
    // }
// }
// 
// ageGender(["12", "f"])

// function animals(input) {
    // let animal = input[0];
    // switch(animal) {
        // case "dog": console.log("mammal"); break;
        // case "crocodile":
        // case "tortoise":
        // case "snake" : console.log("reptile"); break;
        // default: console.log("unknown")
    // }
// }
// animals(["crocsdasd"])
// function shop(input) {
    // let product = input[0];
    // let city = input[1];
    // let amount = Number(input[2]);
// 
    // if(city === "Sofia") {
        // switch(product){
            // case "coffee": console.log(0.50 * amount); break;
            // case "water": console.log(0.80 * amount); break;
            // case "beer": console.log(1.20 * amount); break;
            // case "sweets": console.log(1.45 * amount); break;
            // case "peanuts": console.log(1.60 * amount); break;
        // }
    // }
    // else if(city === "Plovdiv") {
        // switch(product){
            // case "coffee": console.log(0.40 * amount); break;
            // case "water": console.log(0.70 * amount); break;
            // case "beer": console.log(1.15 * amount); break;
            // case "sweets": console.log(1.30 * amount); break;
            // case "peanuts": console.log(1.50 * amount); break;
        // }
    // }
    // else {
        // switch(product){
            // case "coffee": console.log(0.45 * amount); break;
            // case "water": console.log(0.70 * amount); break;
            // case "beer": console.log(1.10 * amount); break;
            // case "sweets": console.log(1.35 * amount); break;
            // case "peanuts": console.log(1.55 * amount); break;
        // }
    // }
// }
// 
// shop(["sweets","Sofiq","2.23"])

// function numberInRange(input) {
    // let number = Number(input[0]);
    // if(number >= -100 && number <= 100 && number !== 0) {
    // console.log("Yes")
    // } else {
        // console.log("No")
    // }
// }
// 
// numberInRange(["-25"])

// function ticket(input){
    // let day = input[0];
    // if(day === "Monday" || day === "Tuesday" || day === "Friday"){
        // console.log(12)
    // } else if(day === "Wednesday" || day === "Thursday") {
        // console.log(14)
    // } else {
        // console.log(16)
    // }
// }
// ticket(["Sunday"])

function workTime(input) {
    let hour = Number(input[0]);
    let day = input[1];
    switch(day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday": 
            if(hour >= 10 && hour <= 18) {
                console.log("open")
            } else {
                console.log("closed")
            } break;
        default: console.log("closed")
    }
}

workTime(["19","Monday"])

// function validNumbers(input) {
    // let num = Number(input[0]);
    // let isValid = num >= 100 && num <= 200 || num === 0;                         //isValid е променлива която проверява дали числото е валидно
    // if(isValid === false) {                                                     //следователно ако числото е валидно стойността на boolean-а ще е true
        // console.log("invalid")                                                 // със if проверяваме ако числото е false, тъй като когато е true конзолата не трябва да отпечатва нищо
    // } 
// }
// 
// validNumbers(["150"])

function comissionsTask(input) {
    let city = input[0];
    let amount = Number(input[1]);
    let comissions = 0;
    if(city === "Sofia"){
            if(amount >= 0 && amount <= 500) {
                comissions = 5/100 * amount;
            } else if(amount >= 500 && amount <= 1000) {
                comissions = 7/100 * amount;
            } else if(amount >= 1000 && amount <= 10000) {
                comissions = 8/100 * amount;
            } else if(amount >= 10000) {
                comissions = 12/100 * amount;
            } else if(amount <= 0){
                console.log("error")
            } 
            console.log(comissions.toFixed(2))
    } else if(city === "Varna") {
        
            if(amount >= 0 && amount <= 500) {
                comissions = 4.5/100 * amount;
            } else if(amount >= 500 && amount <= 1000) {
                comissions = 7.5/100 * amount;
            } else if(amount >= 1000 && amount <= 10000) {
                comissions = 10/100 * amount;
            } else if(amount >= 10000) {
                comissions = 13/100 * amount;
            } else if(amount <= 0){
                console.log("error")
            } 
            console.log(comissions.toFixed(2))
    } else if(city === "Plovdiv") {

            if(amount >= 0 && amount <= 500) {
                comissions = 5.5/100 * amount;
            } else if(amount >= 500 && amount <= 1000) {
                comissions = 8/100 * amount;
            } else if(amount >= 1000 && amount <= 10000) {
                comissions = 12/100 * amount;
            } else if(amount >= 10000) {
                comissions = 14.5/100 * amount;
            } else {
                console.log("error")
            }
        } else {
            console.log("error")
        } 
        if(comissions >= 0) {
            console.log(comissions.toFixed(2))
        } else {
            console.log("error")
        }          
    } 

comissionsTask(["Plovdiv","-20"])
