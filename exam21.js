function paint(input) {
    let paintBucket = Number(input[0]);
    let wallpaperRoll = Number(input[1]);
    let glovesPrice = Number(input[2]);
    let brushPrice = Number(input[3]);

    let glovesAmount = wallpaperRoll * 0.35;
    let brushesAmount = 0.48 * paintBucket;
    
    let sum = paintBucket * 21.50 + wallpaperRoll * 5.20 + Math.ceil(glovesAmount) * glovesPrice + brushPrice * Math.floor(brushesAmount);
    let delivery = 1/15 * sum

    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);
}

paint(["10", "8", "2.2", "5"])