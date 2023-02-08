/*DICTINARY*/
function myDictionary() {
   var Animal= {  /*KEY VALUE PAIRS*/
    Species: "Dog",
    Color: "Black",
    Breed: "Bulldog",
    Age: 2,
    Sound: "Bark!"
};
document.getElementById("Dictionary").innerHTML=Animal.Sound;/* BARK IS THE OUTPUT ONCE CLICK ME BUTTON IS PUSHED*/                
} 
function myDictionary() {
    var Animal= {  
     Species: "Dog",
     Color: "Black",
     Breed: "Bulldog",
     Age: 2,
     Sound: "Bark!"
 };
 delete Animal.Sound;/*this deletes animal sound and returns result as undefined when button is clicked*/
 document.getElementById("Dictionary").innerHTML=Animal.Sound;
 } 