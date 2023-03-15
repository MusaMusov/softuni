function test(input) {
    let strawPrice = input[0]
    let bananaAmount = input[1]
    let orangeAmount = input[2]
    let raspAmount = input[3]
    let strawAmount = input[4]

    let raspPrice = strawPrice * 0.5;
    let orangePrice = raspPrice * 0.6;
    let bananaPrice = raspPrice * 0.2;

    let total = raspPrice * raspAmount + strawPrice * strawAmount + orangePrice * orangeAmount + bananaPrice * bananaAmount;
    console.log(total.toFixed(2));
}

test([
    48,
    10,
    3.3,
    6.5,
    1.7
])