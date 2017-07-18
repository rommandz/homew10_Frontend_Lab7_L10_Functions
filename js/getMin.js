function getMin() {
    var min = arguments[0] ;
    for (var i = 0; i < arguments.length; i++){
        if (arguments[i] < min){
            min = arguments[i];
        }
}
    return min;
}

//console.log(getMin(10, 1, 2, 3, 0, -1, -2, -3, 10));
