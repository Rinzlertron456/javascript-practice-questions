//Check whether given number is a palindrome or not. If it contains negative sign, it doesn't count as a palindrome.
//Because negative numbers are not considered palindromes, we can simply check if the number is negative and return false in that case.
let num = 121;

//Logic Based Solution on Reversing the Number
const isPalindromeNumber = (num) => {
  //Brute force solution
  //   if (num < 0) return false;
  //   else {
  //     let rev = 0,
  //       tempNum = num;
  //     while (tempNum > 0) {
  //       let rem = tempNum % 10;
  //       rev = rev * 10 + rem;
  //       tempNum = Math.floor(tempNum / 10);
  //     }
  //     return rev === num;
  //   }

  // Optimized solution
  let tempNum = num,
    rev = 0;
  while (tempNum > 0) {
    let rem = tempNum % 10;
    rev = rev * 10 + rem;
    tempNum = Math.floor(tempNum / 10);
  }
  return num === rev;
};

//Using in built js methods
const isNumPalindrome = (num) => {
  return num < 0
    ? false
    : num.toString() === num.toString().split("").reverse().join("");
};

console.log(isPalindromeNumber(num));
console.log(isNumPalindrome(num));
