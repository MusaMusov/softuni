// function radToDegrees(input) {
    // let rad = Number(input[0])
    // let degrees = rad * 180/ Math.PI
    // console.log(degrees)
// }

// radToDegrees(["3.1416"])

// function convertor(input) {
    // let usd = input[0]
    // let bgn = usd *  1.79549
    // console.log(bgn)
// }
// 
//convertor([10])

//сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

// 1. Депозирана сума – реално число в интервала [100.00 … 10000.00]
// 
// 2. Срок на депозита (в месеци) – цяло число в интервала [1…12]
// 
// 3. Годишен лихвен процент – реално число в интервала [0.00 …100.00]



// function deposit(input) {
    // let depositedSum = Number(input[0])
    // let deadline = Number(input[1])
    // let yearlyInterest = Number(input[2])
    // let amassedInt = depositedSum * (yearlyInterest/100)
    // let monthlyInt = amassedInt / 12
    // let threeMonthInt = monthlyInt * 3
    // console.log(threeMonthInt)
// }

//deposit(["200","3","5.7"])

// function literature(input) {
    // let pages = Number(input[0]);
    // let pagesPerHour = Number(input[1]);
    // let daysToRead = Number(input[2]);
    // let hoursPerBook = pages / pagesPerHour;
    // let hoursPerDay = hoursPerBook / daysToRead;
    // console.log(hoursPerDay)
// }

// literature(["212","20","2"])
// 

// function school(input) {
    // let penPrice = 5.8;
    // let markerPrice = 7.20;
    // let cleaningMixPrice = 1.2;
    // let penSum = input[0] * penPrice;
    // let markerSum = input[1] * markerPrice;
    // let cleaningMixSum = input[2] * cleaningMixPrice;
    // let discount = input[3]
    // let totalPrice = (penSum + markerSum + cleaningMixSum) - (penSum + markerSum + cleaningMixSum) * (discount/100)
    // console.log(totalPrice)
// }

//school(["2","3","4","25"])

// function repainting(input) {
    // let foilPrice = 1.5;
    // let paintPrice = 14.5;
    // let paintThinnerPrice = 5;
    // let bags = 0.4 ;
    // let foilSum = (Number(input[0]) + 2) * foilPrice;
    // let paintSum = (Number(input[1]) + (Number(input[1]) * 0.1)) * paintPrice;
    // let thinnerSum = Number(input[2]) * paintThinnerPrice;
    // let sum = foilSum + paintSum + thinnerSum + bags;
    // let workPrice = (sum * 0.3) * Number(input[3]);
    // let totalSum = sum + workPrice;
    // console.log(totalSum)
// }

// repainting(["10","11","4","8"])

// function restaurant(input) {
    // let chickenPrice = 10.35;
    // let fishPrice = 12.40;
    // let vegPrice = 8.15;
    // let orderedChicken = Number(input[0]);
    // let orderedFish = Number(input[1]);
    // let orderedVeg = Number(input[2]);
    // let sum = chickenPrice * orderedChicken + fishPrice * orderedFish + vegPrice * orderedVeg;
    // let dessert = sum * 0.2;
    // let delivery = 2.5;
    // let totalSum = sum + dessert + delivery;
    // console.log(totalSum)
// }
// 
// restaurant(["2","4","3"])

// function basketball(input) {
    // let membership = Number(input[0]);
    // let sneakers = Number(input[0]) - (Number(input[0]) * 0.4);
    // let outfit = sneakers - (sneakers * 0.2);
    // let ball = outfit * (1 / 4);
    // let accesorries = ball * (1 / 5)
    // let sum = membership + sneakers + outfit + ball + accesorries;
    // console.log(sum)
// }
// 
// basketball(["365"])

function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentTaken = Number(input[3]);
    let tankVolume = length * width * height;
    let tankVolumeL = tankVolume / 1000;
    let percentLeft = 1 - (percentTaken / 100);
    let waterVolume = tankVolumeL * percentLeft;
    console.log(waterVolume);
}

fishTank(["85","75","47","17"])