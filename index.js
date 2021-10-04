function brushTeeth() {
    console.log("- Pickup tthe toothburush");
    console.log("- Opent he toothpaste");
    console.log("- Puut some toothpaste on the toothbrush");
    console.log("- BNrush your teeth by rubbing the toothBrush on your teeth");
}

function makeBedPrayer() {
    console.log("بسمك اللهم أموت وأحيا");
}

function goToBed() {
    brushTeeth();
    makeBedPrayer();
}

goToBed();

bmi = (weight / height) ^ 2;

// bmi statuus( < 19 thin, 19 < bmi < 25 Good, > 25 your overweight)

function calculateBmi(weight, height) {
    return weight / (height * height);
}

function getBmiStatus(bmi) {
    if (bmi < 20) {
        return "Underweighted";
    } else if (bmi <= 25) {
        return "normal";
    } else {
        return "overweight";
    }
}

let aBmi = calculateBmi(80, 1.8);
let bBmi = calculateBmi(40, 1.8);
let cBmi = calculateBmi(120, 1.8);

let aStatus = getBmiStatus(aBmi);
let bStatus = getBmiStatus(bBmi);
let cStatus = getBmiStatus(cBmi);

console.log("a", aBmi, aStatus);
console.log("b", bBmi, bStatus);
console.log("c", cBmi, cStatus);