
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
// var form = $('form');

canvas.width=800;
canvas.height=600;


// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);
