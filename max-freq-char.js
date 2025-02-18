let word = "abcccccccd";
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
//Object Based Method
let frequency = {};
for ( let letter of word) {
    frequency[letter] = (frequency[letter] || 0) + 1;
}

console.log(Object.values(frequency).forEach((num) => {
    console.log(`${num} times "${Object.keys(frequency).find(key => frequency[key] === num)}"`);
}))