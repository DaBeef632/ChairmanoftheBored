window.onload = function () {
  document.getElementById('btnGetActive').addEventListener('click', getActivity, false)
}

var xmlhttp = new XMLHttpRequest();


function getActivity()
{
 var url = `https://www.boredapi.com/api/activity`
 xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = displayActivity();
 xmlhttp.open("GET", url, true);
 xmlhttp.send();
}

function displayActivity(){
  if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
  {
   console.log(xmlhttp.responseText);
   var response = xmlhttp.responseText;
   response.JSON.parse(response);
   console.log(response.activity);
   document.getElementById("activity").innerHTML ="<h1>" + response.activity + "</h1>"

  }
  console.log(displayActivity);
}

