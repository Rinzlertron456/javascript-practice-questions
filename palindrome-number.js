let num = 10;

//Using built in js methods
let sign = Math.sign(num);
num = Math.abs(num);
const res =
  sign < 0
    ? num.toString().split("").reverse().join("") * sign
    : num.toString().split("").reverse().join("");
console.log(res);

//Basic Method (Not applicable for negative numbers and numbers ending in 0)
// let res = 0;
// while(num>0){
//     let rem = num%10;
//     res = res*10 + rem;
//     num = Math.floor(num/10);
// }
// console.log(res)
//Enhanced Method
// let res = 0;
// if(num<0) num = Math.abs(num);
// while ( num>0 ){
//     let rem = num%10;
//     res = res*10 + rem;
//     num = Math.floor(num/10);
// }
// console.log(res*-1);
//Using String Methods (Advanced )
// let sign = Math.sign(num);
// num = Math.abs(num);
// console.log(num.toString().split('').reverse().join('')*sign);
//Slight modification for non-negative numbers ending in 0 ( if you want exact reversal of numbers when asked)
