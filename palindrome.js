let word = "Tenet";
//All solutions are evaluated with case-sensitive conditions
//Basic Solution
// let reverseWord = "";
// word = word.toUpperCase();
// for (let char of word) {
//     reverseWord = char + reverseWord;
// }
// console.log(word === reverseWord)
//Enhanced Solution
let reverseWord = word.toUpperCase().split('').reverse().toString();
console.log(word===reverseWord)
// word  = word.toUpperCase();
// let reverseWord = word.toUpperCase().split('').reverse().join('');
// function palindrome(letter){
//     console.log(word+" "+reverseWord)
//     for (let char in reverseWord){
//         console.log(char+" "+letter)
//         if(char !== letter){
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(word.split('').every(palindrome));