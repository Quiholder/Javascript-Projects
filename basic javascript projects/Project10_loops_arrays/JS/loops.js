/*loop*/
function Call_Loop() {
var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
document.getElementById("loop").innerHTML = i;
}
/*The length property returns the length of a string*/
let text = "Hello World!";
let length = text.length;
document.getElementById("length").innerHTML = length;

/*FOR LOOP EXAMPLE*/
var Instruments=["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
var Content="";
var Y;
function for_Loop() {
    for(Y=0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}
