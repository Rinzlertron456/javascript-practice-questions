//Sum of all digits of a num

let num = 1287;

//Logical Reasoning Solution
let sum = 0;
while (num > 0) {
  let rem = Math.floor(num % 10);
  sum += rem;
  num /= 10;
}
console.log("Logical Reasoning Result", sum);

//Traditional Javascript Logic using Arrays
