var bodycolor=document.getElementById('main');
//funnction for hexadecimar
function hexColorCode(){
var colorcode=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let bgcolor='#';
for(let i=0;i<6;i++){

bgcolor = bgcolor + colorcode[Math.floor(Math.random()*15)];

}

bodycolor.style.backgroundColor=bgcolor;
document.getElementById('colorcode').textContent=bgcolor;

}
//funnction for rgb color code
function rgbColorCode(){
var red=Math.floor(Math.random()*255);
var green=Math.floor(Math.random()*255);
var blue=Math.floor(Math.random()*255);

let rgbcolor=`rgb(${red},${green},${blue})`;
bodycolor.style.backgroundColor=rgbcolor;
document.getElementById('colorcode').textContent=rgbcolor;
}
//funnction for rgba color code
function rgbaColorCode(){
    var red=Math.floor(Math.random()*255);
var green=Math.floor(Math.random()*255);
var blue=Math.floor(Math.random()*255);

var alpha=Math.random().toFixed(1);
let rgbacolor=`rgba(${red} , ${green} , ${blue} , ${alpha})`;
bodycolor.style.backgroundColor=rgbacolor;
document.getElementById('colorcode').textContent=rgbacolor;

}