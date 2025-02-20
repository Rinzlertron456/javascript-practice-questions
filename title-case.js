let line = "what is titlecase?";
console.log(line.split(" ").map((word) =>{
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" "))