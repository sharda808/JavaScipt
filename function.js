function getfactorial(num){

    if(num==1 || num==0){
        return 1;
    }
    let fact = getfactorial(num-1);
    return num*fact;
}
console.log(getfactorial(5));
console.log(getfactorial(0));

function getfactorialIterative(num){
    let i=1;
    let result = 1;
    while(i<=num){
        result*=i;
        i++;
    }
    return result;
}
console.log(getfactorialIterative(5));
function getsum(num){
    if(num==1){
        return 1;
    }
    return num + getsum(num-1);
}
console.log(getsum(10));
console.log(getsum(100));
