//Question 1:

var a = 10;

console.log("QUESTION 1:");

console.log(`The value of a is: ${a}`);

console.log(`The value of ++a is: ${++a}`);
console.log(`Now the value of a is: ${a}`);

console.log(`The value of a++ is: ${a++}`);
console.log(`Now the value of a is: ${a}`);

console.log(`The value of --a is: ${--a}`);
console.log(`Now the value of a is: ${a}`);

console.log(`The value of a-- is: ${a--}`);
console.log(`Now the value of a is: ${a}`);

//Question 2:

var x = 2;
var y = 1;

console.log("QUESTION 2:");

console.log(`The value of --x is: ${--x}`);

console.log(`The value of --x - --y is: ${--x - --y}`);

console.log(`The value of (--x - --y) + ++y  is: ${--x - --y + ++y}`);

console.log(
  `The value of (--x - --y + ++y) + y--  is: ${--x - --y + ++y + y--}`,
);

console.log(`the value of x is: ${x}`);

console.log(`the value of y is: ${y}`);

//Question 3:

var userName = prompt("Please Enter Your Name");

//Question 5:

var number = prompt("Enter a number:");

if (number === "" || number === null) {
  number = 5;
}

document.write("<h2>Multiplication Table of " + number + "</h2>");

for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + number * i + "<br>");
}

//Question 6:
