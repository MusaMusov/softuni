// function solve() {
    // console.log(1 + 1 + "4" + 2 + 1)      //everything after a string value is concatenated(stuck together)
// }
// 
// solve()


// function solve() {
    // let a = 5;
    // let b = "5"
    // console.log(a === b)
// }
// solve()
// 
// = присвояване на стойности; == проверява за равенство на стоности; ===проверява за равенство на стойности и типове данни;
// !=проверява неравнство на стойности; !== проверява неравенство на стойности и типове данни

// function excellentResult (input) {
    // let grade = Number(input[0]);
// 
    // if(grade >= 5.5){
        // console.log("Excellent!");
    // }
    // else {
        // console.log("Not Excellent!")
    // }
// }
// 
// excellentResult(["4"])
// 
// 
// 

// function greaterNumber(input) {
    // let numberOne = Number(input[0]);
    // let numberTwo = Number(input[1]);
// 
    // if (numberOne > numberTwo) {
        // console.log(numberOne);
    // }
    // else {
        // console.log(numberTwo);
    // }
// }
// 
// greaterNumber(["10", "5"])

// function evenOrOdd (input) {
    // let num = Number(input[0])
    // if (num % 2 === 0) {
    // console.log("even")
    // }
    // else {
        // console.log("odd")
    // }
// }
// 
// evenOrOdd(["4"])

// function mathCeilFloor(input){
    // let num = Number(input[0]);
    // console.log(Math.floor(num));
    // console.log(Math.ceil(num));
    // console.log(num.toFixed(3))
// }
// 
// mathCeilFloor(["3.1415546456"])


// function areaOfFigures (input) {
    // let type = input[0];
    // let result = 0;
    // 
    // if (type === "square") {
        // let side = Number(input[1]);
        // result = side * side;
    // }
    // else if (type === "rectangle") {
        // let sideOne = Number(input[1]);
        // let SideTwo = Number(input[2]);
        // result = sideOne * SideTwo;
    // }
    // else if (type === "circle") {
        // let radius = Number(input[1]);
        // result = Math.PI * Math.pow(radius, 2);
    // }
    // else {
        // let side = Number(input[1]);
        // let h = Number(input[2]);
        // result = side * h / 2
    // }
    // console.log(result.toFixed(3))
// }
// 
// areaOfFigures(["rectangle", "7", "2.5"]) 

// function passwordGuess(input) {
    // let guess = input[0];
    // if (guess === "s3cr3t!P@ssw0rd") {
        // console.log("Welcome")
    // }
    // else {
        // console.log("Wrong password!")
    // }
// }
// passwordGuess(["s3cr3t!P@ssw0rd"])



// function numbersTask(input) {
    // let number = Number(input[0]);
    // if (number < 100) {
        // console.log("Less than 100")
    // }
    // else if (number <= 200) {
        // console.log("Between 100 and 200")
    // }
    // else {
        // console.log("Greater than 200")
    // }
// }
// 
// numbersTask(["1195"])


function speedTask(input) {
    let speed = Number(input[0])
    if (speed <= 10) {
        console.log("slow");
    }
    else if (speed <= 50) {
        console.log("average");
    }
    else if (speed <= 150) {
        console.log("fast")
    }
    else if (speed <= 1000) {
        console.log("ultra fast");
    }
    else {
        console.log("extremely fast")
    }
}

speedTask(["3500"]) 