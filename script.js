var css = document.querySelector("h4");
var color1 =document.querySelector(".color1");
var color2 =document.querySelector(".color2");
var body = document.getElementById("background");

function Gradient()
                       {
    body.style.background="linear-gradient(to right,"
    +color1.value
    +","
    +color2.value+")";
    css.textContent=body.style.background + ";";
}

function RandomColor()
{
    var color ='#';
    for(var i=0;i<6;i++)
        {
            color +=Math.floor(Math.random()*16).toString(16);
        }
   
  return color;
}
function hexColor()
{
    color1.value=RandomColor();
    color2.value=RandomColor();
    Gradient();
}

var button = document.createElement("button");
button.innerHTML="RANDOM";
button.setAttribute("class","btn");
body.appendChild(button);
button.addEventListener("click",hexColor);

Gradient();
color1.addEventListener("input",Gradient);
color2.addEventListener("input",Gradient);
