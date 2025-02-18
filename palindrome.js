let word = "Tenet";
if(word === "" || word === " ") console.log(invalid)
//All solutions are evaluated with case-sensitive conditions
//Basic Solution
// let reverseWord = "";
// word = word.toUpperCase();
// for (let char of word) {
//     reverseWord = char + reverseWord;
// }
// console.log(word === reverseWord)
//Enhanced Solution
// let reverseWord = word.toUpperCase().split('').reverse().toString();
// console.log(word===reverseWord)
//Two-pointer method ( Two Loop )
// word  = word.toUpperCase();
// let reverseWord = word.toUpperCase().split('').reverse().join('');
// let left = '', right = '';
// let check = false;
// for (let i = 0; i < word.length; i++) {
//     left = word.charAt(i);
//     for (let j = word.length - 1; j >= 0 ; j--) {
//         right = word.charAt(j);
//         if (left === right) {
//             check = true;
//         }
//         else check = false;
//     }
// }
// console.log(check);
//Two-pointer method ( Single Loop )
// word  = word.toUpperCase();
// let reverseWord = word.toUpperCase().split('').reverse().join('');
// let left =0, right = word.length-1;
// let check = true;
// while (check&&left<=word.length-1&&right>=0) {
//     if( word.charAt(left) === word.charAt(right) ) {
//         check = true;
//         left++;
//         right--;
//     }
//     else check = false;
// }
// console.log(check);
//Using every() function
let check = false;
function palindrome(letter,index){
    return letter === word.toUpperCase().charAt(word.length-index-1);
}
console.log(word.toUpperCase().split('').every(palindrome));
