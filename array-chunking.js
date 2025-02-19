function chunk(array,size){
    let res = [];
    let start = 0, end = size;
    for (let i = 0; i < array.length; i+=end) {
        res.push(array.splice(start,end));
    }
    return res;
}

console.log(chunk([1,2,3,4,5],2))