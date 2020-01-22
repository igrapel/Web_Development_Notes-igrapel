
function myFunction() {

var start = document.getElementById("start").value;
var end= document.getElementById("end").value;
//var jump= document.getElementById("jump").value;

  
  for (var i = start; i <= end; i++) {
    
document.write( '<p>' + i + '</p>');
  
}
}
