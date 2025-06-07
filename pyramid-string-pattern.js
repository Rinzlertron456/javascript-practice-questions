let n=2
for (let i = 0; i < n; i++) {
    let line='';
    for (let j = 0; j < n-i-1; j++) {
        line+=' ';
    }
    for (let j = 0; j < 2*i+1; j++) {
        line+='#';
    }
    console.log(line)
}