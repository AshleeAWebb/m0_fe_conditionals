var goodDrivingRecord = false;
var age = 22;

if (age > 25 && goodDrivingRecord) {
    console.log(`You qualify for a discount on your car rental!`)
}
else if (age > 25 || goodDrivingRecord) {
    console.log(`You qualify for a car rental.`)
}
else {
    console.log(`You do not qualify for a car rental please have someone else sign.`)
}
