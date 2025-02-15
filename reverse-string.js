let str = "RipAndTear", res = "";
//Stripped down / Conventional Method
// for (let i = 0; i < str.length; i++) {
//     let ch = str.charAt(i);
//     res = ch + res;
// }
// console.log(res);
// Enhanced for loop
// for (let char of str) {
//     res = char + res;
// }
// console.log(res);
// Built-in functions
// let arr = str.split('');
// arr.reverse();
// console.log(arr.join(''));
//Advanced Built-in functions
console.log(str.split('').reverse().join(''));
