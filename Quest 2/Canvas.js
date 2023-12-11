var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//tree triange 1
c.beginPath();
c.moveTo(200,200);
c.lineTo(300,50);
c.lineTo(400,200);
c.lineTo(200,200);
c.strokeStyle = "green";
c.stroke();
c.fillStyle = "green";
c.fill();

//tree triangle 2
c.beginPath();
c.moveTo(200,300);
c.lineTo(300,100);
c.lineTo(400,300);
c.lineTo(200,300);
c.strokeStyle = "green";
c.stroke();
c.fillStyle = "green";
c.fill();

//tree triange 3
c.beginPath();
c.moveTo(200,400);
c.lineTo(300,150);
c.lineTo(400,400);
c.lineTo(200,400);
c.strokeStyle = "green";
c.stroke();
c.fillStyle = "green";
c.fill();

//red string
c.beginPath();
c.moveTo(270,100);
c.lineTo(375,175);
c.lineTo(230,325);
c.lineTo(400,400);
c.lineWidth = 5;
c.lineCap = "round";
c.strokeStyle = "red";
c.stroke();

//brown rectangle
c.beginPath()
c.fillStyle = "#8b4513";
c.fillRect(275,400,50,50);
c.fill ();

// circle 1
c.beginPath();
c.arc(270,150,20, 0,2 * Math.PI);
c.strokeStyle = "yellow";
c.stroke ();
c.fillStyle = "yellow";
c.fill();

//circle 2
c.beginPath();
c.arc(330,250,20, 0,2 * Math.PI);
c.strokeStyle = "orange";
c.stroke ();
c.fillStyle = "orange";
c.fill();

//circle 3
c.beginPath();
c.arc(270,350,20, 0,2 * Math.PI);
c.strokeStyle = "blue";
c.stroke ();
c.fillStyle = "blue";
c.fill();






