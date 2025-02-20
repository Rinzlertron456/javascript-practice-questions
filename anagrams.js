let stringA = "Hi there", stringB = "Bye there";
let mapA = {}, mapB = {};
stringA.split(" ").forEach((word) => {
    word.split("").map((char) => {
        mapA[char] = (mapA[char] || 0) + 1;
    })
})
stringB.split(" ").forEach((word) => {
    word.split("").map((char) => {
        mapB[char] = (mapB[char] || 0) + 1;
    })
})

console.log(mapA)
console.log(mapB)

// console.log(mapA.includes(mapB))