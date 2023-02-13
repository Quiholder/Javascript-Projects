function full_Sentence() {
    var part_1= " I have ";
    var part_2= " made this ";
    var part_3=" into a complete ";
    var part_4=" sentence ";
var whole_sentence=part_1.concat (part_2, part_3, part_4);
document.getElementById("Concatenate").innerHTML= whole_sentence;
}
/*Slice Method*/
function slice_Method() {
    var Sentence="All work and no play makes Johnny a dull boy.";
    var Section= Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML= Section;
  }
/*UPPERCASE METHOD*/ 
function myFunction() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    text.toUpperCase();
  }
/*STRING SEARCH METHOD tells you the index number of the word you are searching for*/
let text = "Please help me find my keys";
document.getElementById("search").innerHTML = text.search("help");

/*Number Method*/
function string_Method() {
    var X=182;
    document.getElementById("Numbers_to_string").innerHTML=X.toString();
  }
  /*PRECISION METHOD  formats a number to a specified length also rounded up or down*/
  function precision_Method() {
    var X=12938.3012987376112;
     document.getElementById("Precision").innerHTML=X.toPrecision(10);
}
/*number tofixed converts a number to a string, rounded to a specified number of decimals*/
let num = 5.56789;
let n = num.toFixed(2);
document.getElementById("number").innerHTML = n;

/* Value OF valueOf() returns the primitive value of a string*/
let Me = "Good Morning, Quiana!";
let result = Me.valueOf();

document.getElementById("value").innerHTML = result;