// Група до 5 човека – изкачват Мусала
// 
// Група от 6 до 12 човека – изкачват Монблан
// 
// Група от 13 до 25 човека – изкачват Килиманджаро
// 
// Група от 26 до 40 човека – изкачват К2
// 
// Група от 41 или повече човека – изкачват Еверест 
// 
function trekking(input) {
    let groups = Number(input[0])
    let totalPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kili = 0;
    let k2 = 0;
    let everest = 0;
    for(i = 1; i <= groups; i++) {
        let currentGroup = Number(input[i]);
        totalPeople += currentGroup;
        if(currentGroup <= 5) {
            musala += currentGroup;
        } else if(currentGroup <= 12) {
            monblan += currentGroup;
        } else if(currentGroup <= 25) {
            kili += currentGroup;
        } else if(currentGroup <= 40) {
            k2 += currentGroup;
        } else {
            everest += currentGroup;
        }
    }
    let musalaPercent = (musala / totalPeople) * 100;
    let monblanPercent = (monblan / totalPeople) * 100;
    let kiliPercent = (kili / totalPeople) * 100;
    let k2Percent = (k2 / totalPeople) * 100;
    let everestPercent = (everest / totalPeople) * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kiliPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}

trekking
([
"10",
"10",
"5",
"1",
"100",
"12", 
"26", 
"17", 
"37", 
"40", 
"78"
])

    // Първи ред - процентът изкачващи Мусала

    // Втори ред – процентът изкачващи Монблан
    // 
    // Трети ред – процентът изкачващи Килиманджаро
    // 
    // Четвърти ред – процентът изкачващи К2
    // 
    // Пети ред – процентът изкачващи Еверест