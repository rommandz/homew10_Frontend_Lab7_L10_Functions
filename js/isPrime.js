function isPrime(number) {
    var result ;
    if (number > 0) {
    result = true;
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                result = false;
                break;
            }
        }
    } else {
        result = false ;
    }
    return result ;
}
//console.log(isPrime(prompt("enter number", "")));
