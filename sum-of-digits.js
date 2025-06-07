let num=1287, res = 0;
while(num>0){
    res = res*10+num%10;
    num=Math.floor(num/10);
}
console.log(res);