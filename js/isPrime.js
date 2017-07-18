function isPrime(number) {
var result = true;
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            result = false;
            break;
        }
    }
    return result;
}

//console.log(isPrime(prompt("enter number", "")));
