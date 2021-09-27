const btn = document.getElementById("btn");
const body = document.body;

const colours = ["blue", "grey", "#7FDBFF", "white","#0074D9","#FFDC00","#FF851B","#3D9970","#0074D9","#01FF70"];

btn.addEventListener('click',changeBackground);

function changeBackground(){
    let length = colours.length;
    let rand_int = Math.floor(Math.random() * length);
    body.style.backgroundColor = colours[rand_int]
}