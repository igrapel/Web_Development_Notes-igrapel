



function myFunction() {

var start = document.getElementById("start").value;
var end= document.getElementById("end").value;
var jump = document.getElementById("jump").value;
  console.log(typeof jump);
  for (var i = start; i <= end; i++) {
    console.log(typeof i);
document.write( '<p>' + i + '</p>');
   
   console.log(i);
}
}
