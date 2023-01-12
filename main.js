let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.height = 400;
cnv.width = 400;

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 400, 300);

ctx.fillStyle = "green";
ctx.fillRect(0, 300, 400, 300);

ctx.fill();
ctx.fillStyle = "red";

ctx.arc(200, 200, 50, 0, Math.PI, 0);
