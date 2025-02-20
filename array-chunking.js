function chunk(array,size){
    let res = [];
    for (let i = 0; i < array.length; i+=size) {
        res.push(array.slice(i,i+size));
    }
    return res;
}

console.log(chunk([1,2,3,4,5],2))