// Task #1:
var age = 10;

if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age >= 18 && age < 65) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of age is not numerical");
}

// Task #2:
let day = "Sunday";

switch (day) {
    case "Monday":
        console.log("Do Work");
        break;
    case "Tuesday":
        console.log("Do Work");
        break;
    case "Wednesday":
        console.log("Do Work");
        break;
    case "Thursday":
        console.log("Do Work");
        break;
    case "Friday":
        console.log("Do Work");
        break;
    case "Saturday":
        console.log("Relax");
        break;
    case "Sunday":
        console.log("Relax");
        break;
    default:
        console.log("There is no such day");
        break;
}