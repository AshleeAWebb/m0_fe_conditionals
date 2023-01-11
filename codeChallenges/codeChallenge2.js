var goodDrivingRecord = true;
var age = 24;

if (age > 25 && goodDrivingRecord === true) {
    console.log(`You qualify for a discount on your car rental!`)
}
else if (age > 25 || goodDrivingRecord === true) {
    console.log(`You qualify for a car rental.`)
}
else if (age < 25 && goodDrivingRecord === false) {
    console.log(`You do not qualify for a car rental please have someone else sign.`)
}