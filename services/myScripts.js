


function myFunction() {

var start = document.getElementById("start").value;
var end= document.getElementById("end").value;
var jump= document.getElementById("jump").value;
jump = Number(jump);
start = Number(start);
end = Number(end);
console.log(typeof jump);
console.log(typeof start);  
console.log(typeof end);
  for (var i = start; i <= end; i+=jump) {
    
    
    document.write( '<p>' + i + '</p>');
  // document.write(jump);
  // console.log(i);
}
}
