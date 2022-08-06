// Task #1:
console.log("=================");
console.log("Task #1:");

for (let i = 1; i <= 10; i++) {
    if (i === 1) {
        console.log("Gold Medal");
    } else if (i === 2) {
        console.log("Silver Medal");
    } else if (i === 3) {
        console.log("Bronze");
    } else {
        console.log(i);
    }
}

// Task #2:
console.log("=================");
console.log("Task #2:");

for (let i = 1; i <= 10; i++) {
    switch (i) {
        case 1:
            console.log("Gold Medal");
            break;
        case 2:
            console.log("Silver Medal");
            break;
        case 3:
            console.log("Bronze Medal");
            break;
        default:
            console.log(i);
    }
}