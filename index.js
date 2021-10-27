const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//ajuster la toile a une taille de convenance 

canvas.width = 500;
canvas.height = 400;

//obtenir la taille de notre canvas

let width = canvas.width;
let height = canvas.height;

window.onclick = function(){
    start();
}

function start(){
    drawCube();
}

function drawCube(){
    ctx.beginPath();
       ctx.fillRect(width-50,height-50,20,20);
       ctx.fillStyle='red';
       ctx.fill();
    ctx.closePath();
}