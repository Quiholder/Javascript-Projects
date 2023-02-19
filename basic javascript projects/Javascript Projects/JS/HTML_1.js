function Color_Function () {
    var Color_Output;
    var Colors= document.getElementById("Color_input").value;
    var Colors_String= " is a great Color ";
    switch (Colors) {
      case "Red":
       Color_Output="Red" + Colors_String;
      break;
      case "Yellow":
       Color_Output="Yellow" + Colors_String;
      break;
      case "Green":
       Color_Output="Green" + Colors_String;
      break;
       case "Blue":
        Color_Output= "Blue" + Colors_String;
      break;
        case "Pink":
      Color_Output="Pink" + Colors_String;
      break;
       case "Purple":
       Color_Output="Purple" + Colors_String;
      break;
       default:
      Color_Output="Please enter a color exactly as written on the above list.";
    }
  document.getElementById("Output").innerHTML=Color_Output;
  }
  function Hello_World_Function() {/*get elemment by class name works same as element by id just getting class instead*/
    var A=document.getElementsByClassName("Click");
    A[0].innerHTML="The text has changed!";
    }
   
var c = document.getElementById("Quiana");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "purple");
grd.addColorStop(0.5, "lavender");
grd.addColorStop(1, "pink");
ctx.fillStyle = grd;
ctx.fillRect(100, 100, 150, 100);

var c = document.getElementById("Quiana");
var ctx = c.getContext("2d");
ctx.font = "75px Arial";
ctx.strokeText("Quiana",50,50);
