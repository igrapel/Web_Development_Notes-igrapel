function fillState()
{
    var myState = document.getElementById('state');
    var mydropdown = document.getElementById('location');
    if(mydropdown.value == "Miami")
    {
        myState.value = "FL";
    }

    else if(mydropdown.value == "NYC")
    {
        myState.value = "NY";
    }
    else
    {
        mytextbox.value = "";
    }
}

function convertUpper(text, field) 
{
    document.getElementById(field).value = text.toUpperCase();
}

function checkField()
{
  if(document.getElementById("firstName").value=="" || document.getElementById("lastName").value=="")
    {
      alert("You must give your first name.")
    }
}
