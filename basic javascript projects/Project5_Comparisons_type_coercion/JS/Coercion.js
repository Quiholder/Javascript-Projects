document.write("150"+ 10);/*THIS WILL ACT AS A STRING AND COMBINE 150 TO 10 RESULT 15010*/
function thisIsNan() {  /*this nan not a number function result is Nan cant divide 0 by 0*/
    document.getElementById("Test").innerHTML=0/0;
}
function FalseNan () {
    document.getElementById("Test").innerHTML=('007');
}document.write(5E310); /*positive infiity*/
document.write(-4E315); /*negative infinity*/

document.write(100>50); /*boolean true*/

document.write(10<9); /*boolean false*/

document.write(10==10); /* both sides need to equal to be true if not its false*/
document.write(12==4);
X=10;
Y=10;
document.write(X===Y);/*both sides must be equal and same data type to be true*/
X=70;
Y="75";
document.write(X===Y);
DateofBirth1=2/8/2023;
Y=2/8/2023;
document.write("DateofBirth1===Y");
X=25;
Y=25;
document.write(X===Y);

document.write(10>5 && 10>7);/* AND both need to be true*/
document.write(45>20 || 21<25);/*OR one of them need to be true for true result*/
function notFunction () {   /* this will give the opposite of what the outcome is*/
    document.getElementById("Not").innerHTML=!(5>10);
}