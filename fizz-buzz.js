let n=5;
for (let i = 1; i <= n; i++) {
    console.log(i%3==0&&i%5==0?"fizzbuzz":i%3==0?"fizz":i%5==0?"buzz":i)
}