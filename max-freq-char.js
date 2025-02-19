let word = "abcc cccccd";
word = word.replaceAll(" ","");
//Conventional Method
// let frequency  = [];
// let max = 1;
// for (let i = 0; i < word.length; i++) {
//     if (frequency[word[i]]) {
//         frequency[word[i]]++;
//     } else {
//         frequency[word[i]] = 1;
//     }
//     if(max < frequency[word[i]]) max = frequency[word[i]];
// }
//Object Based Method ( Key Value Pair)
// let frequency = {};
// for ( const letter of word) {
//     frequency[letter] = (frequency[letter] || 0) + 1;
// }
// let max = 0;
// for (const [key, value] of Object.entries(frequency)) {
//     if(max<value) {
//         max = value;
//         char = key;
//     }
// }
// console.log(`${char} letter repeated ${max} times is the max frequently repeated character`)
// Array Based Method (Frequency Array)
/*Note:- Arrays objects are stored as key value pair in javascript unlike the zero indexing in java.
* Like the key value pair object { key: value}, the frequency array stores chars and occurences as shown below:-
* { letter: frequency[letter]}
* */
let frequency = {};
for (const letter of word) {
    frequency[letter] = (frequency[letter] || 0) + 1;
}
console.log(frequency)
let max = 0, char = '';
for (const letter in frequency) {
    if(frequency[letter]>max) {
        max = frequency[letter];
        char = letter;
    }
}
console.log(`${char} letter repeated ${max} times is the max frequently repeated character`)