let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
let img = document.getElementById("cloud-img");
cnv.height = 400;
cnv.width = 400;

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 400, 300);

ctx.fillStyle = "green";
ctx.fillRect(0, 300, 400, 300);

ctx.lineWidth = 5;
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 300, 20, Math.PI, 0);
ctx.fill();

ctx.drawImage(img, 120, 90);
ctx.drawImage(img, 160, 70);
