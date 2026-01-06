//👉 1.Find the Maximum of Three Numbers
const maxOfThreeNo = (a, b, c) => {
  let numbers = [a, b, c];
  let highestNumber = numbers.reduce((acc, cur) => {
    if (acc < cur) acc = cur;
    return acc;
  }, 0);
  return highestNumber;
  //   or
  //   numbers.sort((a, b) => b - a);
  //   return `Highest Number among three is: ${numbers[0]}`;
};
console.log(maxOfThreeNo(10, 20, 5));

//👉 2.Check if a Number is Positive, Negative, or Zero
// const numberCheck = (num) => {
//   if (num < 0) return "Negative";
//   if (num === 0) return "Zero";
//   if (num >= 0) return "Positive";
//   return "Provide Valid Input";
// };
// console.log(numberCheck(5));

//👉 3.Calculate Electricity Bill
// const calculateBill = (units) => {
//   if (units <= 100) return units * 5;
//   if (units >= 101 && units <= 200) {
//     units = units - 100;
//     return 500 + units * 7;
//   }
//   if (units >= 201 && units <= 300) {
//     units = units - 200;
//     return 1200 + units * 10;
//   }
//   if (units >= 301) {
//     units = units - 300;
//     return 2200 + units * 12;
//   }
// };
// console.log(calculateBill(100));

//👉  4.Check if a Character is a Vowel or Consonant
// const checkVowelOrConsonant = (char) => {
//   if (char.length > 1) return "Give only one char";
//   char = char.toLowerCase();
//   if (
//     char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "u"
//   ) {
//     return "Vowel";
//   }
//   return "Consonant";
// };
// console.log(checkVowelOrConsonant("a"));

//👉  5.Check if a Year is a Leap Year
// const checkLeapYear = (year) => {
//   console.log(year % 100 != 0);

//   if (year % 4 === 0 && year % 400 === 0 ||) return "Leap Year";
//   return "Not a leap year";
// };
// console.log(checkLeapYear(2024));

// 🏠 Homework

// 👉1. Check if a Character is Uppercase, Lowercase, Digit, or Special Character

// const checkChar = (char) => {
//   if (typeof char === "string") {
//     if (char === char.toUpperCase()) return "Uppercase";
//     if (char === char.toLowerCase()) return "Lowercase";
//   }
//   if (typeof char === "number") return "Number";
// };

// console.log(checkChar("s"));
