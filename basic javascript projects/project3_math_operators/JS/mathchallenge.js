function additionFunction() {
    result=2 + 2;
    document.getElementById("Math").innerHTML=result;
}
function multiplyNumber() {
    result= 6 * 12;
    document.getElementById("Multiply").innerHTML=result;
    }
function DoMath() {
    result=15 / 3;
    document.getElementById("Divide").innerHTML=result;
    }    
    function  moreMath() {
        result=(1 + 2) * 15 /2 - 5;
        document.getElementById("Moremath").innerHTML=result;
    }
    function modulusOperator() {
        result=30 % 8;
        document.getElementById("modulus").innerHTML=result;
    }
    function negationOperator() {
        result=10;
        document.getElementById("Negation").innerHTML= -result;
    }
    window.alert(Math.random());
    window.alert(Math.random() * 100);
    var X= 5; /*this run automatically dont need to put in html*/
    X++;
    document.write(X);
   
    var Y= 10;
    Y--;
    document.write(Y);
    function mathRound() {
    Math.round(4.4);
    document.getElementById("demo").innerHTML=Math.round(4.4);
    }


   