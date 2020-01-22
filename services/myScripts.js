

function myLoop(){ 
var end = document.getElementById("end").value;
var start = document.getElementById("start").value;
for(var i = start; i <= end; i++)
  {
    document.write('<p>' + i);
  }
  }
