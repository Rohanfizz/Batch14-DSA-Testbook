function printer(n:number) : void{
    if(n == 0){
        return;
    }
    console.log(n);
    printer(n-1);
    console.log(n);
}

printer(5)

// Recursion - Function calling itself


function add(a,b) : number{
    return a + b;
}

function helper(a,b){
    console.log(a,b);
    let sum = add(a,b)
    console.log(a,b,sum)
}
helper(10,20)