/*using arrays*/
function cat_pics() {
    var Cat_Picture=[];
    Cat_Picture[0]="sleeping";
    Cat_Picture[1]="playing";
    Cat_Picture[2]="eating";
    Cat_Picture[3]="purring";
    document.getElementById("Cat").innerHTML="In this picture, the cat is " + Cat_Picture[3] + " . ";
}
/*using contants cant change constant*/
function constant_function() {
    const New_Homes={type: "brickhouse", builder:"Lennar", year:"2019"};
    New_Homes.year="2023";
    New_Homes.price="$800,000";
    document.getElementById("Constant").innerHTML="The cost of the " + New_Homes.type + " was " + New_Homes.price;
  }
  let X=10;
  document.write(X);

  /*return statement*/
  document.getElementById("return").innerHTML = myFunction("Qui");

function myFunction(name) {
  return "Hello " + name;
}
/*The break statement can also be used to jump out of a loop: WHEN (i) IS 3*/
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("break").innerHTML = text;

/*The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop*/
let text_Continue = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text_Continue += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text_Continue;