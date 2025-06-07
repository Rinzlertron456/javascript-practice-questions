let stringA = "RAIL! SAFETY!", stringB = "fairy tales";
//Conventional Solution
// let mapA = {}, mapB = {};
//Solution 1
// stringA.toLowerCase().split(" ").forEach((word) => {
//     word.split("").filter(char=>char >= 'a' && char <= 'z').map((char) => {
//         mapA[char] = (mapA[char] || 0) + 1;
//     })
// })
// stringB.toLowerCase().split(" ").forEach((word) => {
//     word.split("").filter(char=>char >= 'a' && char <= 'z').map((char) => {
//         mapB[char] = (mapB[char] || 0) + 1;
//     })
// })
// let arrA = stringA.toLowerCase().split(" ").splice(1);
// console.log(arrA)
// let anagram = true;
// for (const char in mapA) {
//     if(!stringB.includes(char)) {
//         anagram = false;
//         break;
//     }
// }
// console.log(mapA)
// console.log(mapB)
// console.log(anagram)
//Advanced Solution
function anagram(stringA, stringB){
    return (stringA.toLowerCase().replace(/[\W]/g,'').split('').sort().join('')===stringB.toLowerCase().replace(/[\W]/g,'').split('').sort().join(''));
}

console.log(anagram(stringA, stringB));
// console.log(mapA.includes(mapB))