function getClosestToZero() {
        var minimumOfAbsoluteValue = arguments[0] ;
        for (var i = 0; i < arguments.length; i++) {
            if ( Math.abs(arguments[i]) < Math.abs(minimumOfAbsoluteValue) ){
                minimumOfAbsoluteValue = arguments[i] ;
            }
        }
        return minimumOfAbsoluteValue ;
}

//console.log(getClosestToZero(10, 9, 8, 7, -2, 1, -3, 10));
