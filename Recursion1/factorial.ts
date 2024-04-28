function factorial(n: number): number {
    if (n == 0) return 1;
    if (n == 1) return 1;
    let nm1f = factorial(n - 1);
    return n * nm1f;
}

console.log(factorial(5));
