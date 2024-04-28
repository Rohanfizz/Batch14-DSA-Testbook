function fibonacci(n) {
    if (n == 1)
        return 0;
    if (n == 2)
        return 1;
    var fnm1 = fibonacci(n - 1);
    var fnm2 = fibonacci(n - 2);
    return fnm1 + fnm2;
}
var ans = fibonacci(10);
console.log(ans);
