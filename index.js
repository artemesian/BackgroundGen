var color1=document.getElementById('color1');
var color2=document.getElementById('color2');
var color3=document.getElementById('color3');
var body1=document.getElementById('body');
var h3=document.getElementById('css');

function backgroundGradient() {
body1.style.background=`linear-gradient(to right,${color1.value},${color2.value},${color3.value})`;
h3.innerText=body1.style.background;
}
backgroundGradient();
color1.addEventListener('input',backgroundGradient);
color2.addEventListener('input',backgroundGradient);
color3.addEventListener('input',backgroundGradient);
