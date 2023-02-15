function countToTen(){
    var Digit= "";
    var X= 1;
    while(X<11) {
        Digit +="<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innHTML=Digit;
}