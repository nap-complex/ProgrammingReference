var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100);
c.fillRect(200, 200, 100, 100);
c.fillRect(400, 300, 100, 100);
c.fillRect(300, 400, 100, 100);
c.fillRect(700, 500, 100, 100);

console.log(canvas);
