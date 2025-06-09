let num = 12378;
let digCount = 0;

//Traditional Logic Based Solution
tempNum = Math.abs(num);
while (tempNum > 0) {
  digCount++;
  tempNum = Math.floor(tempNum / 10);
}
console.log("Number of Digits in the Number:", digCount);

// javascript method based solution
let numStr = Math.abs(num).toString();
console.log("Number of Digits in the Number using String:", numStr.length);
