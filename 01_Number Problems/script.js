// 1.Print Numbers from 1 to N
// let input = 5;
// for (let i = 1; i <= input; i++) {
//   console.log(i);
// }

// 2.Print Numbers from N to 1 without changing the loop condition of above question
// let input = 5;
// for (let i = 1; i <= input; i++) {
//   console.log(input - i + 1);
// }

// 3. Print All Even Numbers from 1 to N
// let input = 100;
// for (let i = 2; i <= input; i += 2) {
//   console.log(i);
// }

// 4.Sum of First N Natural Numbers
// let input = 5;
// let output = 0;
// for (let i = 1; i <= input; i++) {
//   output += i;
// }
// ---or using formula
// n * (n + 1) / 2
// let output = (input * (input + 1)) / 2;
// console.log(output);

// 5.Product (Factorial) of N
// let input = 5;
// let output = 1;
// for (let i = 1; i <= input; i++) {
//   output *= i;
// }
// console.log(output);

// 6.Sum of All Even Numbers up to N
// let input = 10;
// let output = 0;
// for (let i = 2; i <= input; i += 2) {
//   output += i;
// }
// console.log(output);

// 7.Print Squares of Numbers from 1 to N
// let input = 5;
// for (let i = 1; i <= input; i++) {
//   console.log(i ** 2);
// }

// 🏠 Homework / Practice Challenge

// 1.Print all numbers divisible by 3 and 5 up to N
// let input = 30;
// for (let i = 1; i <= input; i++) {
//   if (i % 3 === 0) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }
// }

// 2.Find the sum of all odd numbers up to N
// let input = 10;
// let output = 0;
// for (let i = 1; i <= input; i += 2) {
//   output += i;
// }
// console.log(output);

// 3.Print the cubes of numbers from 1 to N
// let input = 5;
// for (let i = 1; i <= input; i++) {
//   console.log(i ** 3);
// }

// 4.Print only the numbers that are both even and perfect squares
let input = 20;
for (let i = 2; i * i <= input; i += 2) {
  console.log(i * i);
}
//  2*2 = 4
// 3*3 = 9
// 4*4=16
