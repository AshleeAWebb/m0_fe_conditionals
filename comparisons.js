// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("is numberStudents greater than or equal to 20?", numberStudents >= 20);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("is numberStudents greater than or equal to 21?", numberStudents >= 21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("is numberStudents less than or equal to 20?", numberStudents <= 20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("is numberStudents less than or equal to 21?", numberStudents <= 21);

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
//On line 56 the comparison operation is asking if 4 is less than 9? The return value is true. 
var books = 3;
console.log(4 < books);
// YOU DO: Explain.
//On line 59, a variable called books is declared and assigned the value of the number 3. On line 60, the comparison 
//is asking if 4 is less than books, since books is assigned to 3, this is really asking: is 4 less than 3? 
//The return value is false.
var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
//On line 65 a variable called friends is declared, on line 66 an additional varaible called sibilings is decalred. On line 67, 
//the comparison is asking is the variable friends is greater than the variable siblings, since friends is assigned 6 and siblings is 
//assigned 2, the comparison is asking is 6 greater than 2? The return is true. 
var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
//On line 72 a variable called attendees is declared, on line 73 a varaible called meals is decalred. On line 74, 
//the comparison is asking is the variable attendees is not strictly equal to the variable meals, since attendees is assigned 9 and meals is 
//assigned 8, the comparison is asking if 9 is not strictly equal to 8? The return is true.  

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age <=1);
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:True, because I used a less than or equal to a year as the the age limit for a puppy. 
//The dogs loves to play and is 1 or less indicating that both items are true. 