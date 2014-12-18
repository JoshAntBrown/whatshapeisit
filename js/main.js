(function() {
  'use strict';
  var moment = require('moment');
  var Vector = require('./modules/vector');
  var Circle = require('./modules/circle');
  var Triangle = require('./modules/triangle');

  var _window = window;
  var canvas = document.getElementById('main');
  var ctx = canvas.getContext('2d');

  canvas.setAttribute('height', _window.innerHeight);
  canvas.setAttribute('width', _window.innerWidth);

  var circle = new Circle(ctx,canvas.width/2,canvas.height/2,100,'#fafafa');

  circle.draw();

  var points = [
    polarCoords(circle.x, circle.y, circle.r, 1),
    polarCoords(circle.x, circle.y, circle.r, 90),
    polarCoords(circle.x, circle.y, circle.r, 180)
  ];

  var shape = new Vector(ctx, points);

  function draw() {
    ctx.clearRect(0,0,_window.innerWidth,_window.innerHeight);
    circle.draw();

    var date = moment();
    var time = date.format('HHmmss');
    shape.update({
      points: [
        polarCoords(circle.x, circle.y, circle.r, time[0]),
        polarCoords(circle.x, circle.y, circle.r, time[1]),
        polarCoords(circle.x, circle.y, circle.r, time[2]),
        polarCoords(circle.x, circle.y, circle.r, time[3]),
        polarCoords(circle.x, circle.y, circle.r, time[4]),
        polarCoords(circle.x, circle.y, circle.r, time[5]),
        polarCoords(circle.x, circle.y, circle.r, time[6]),
      ]
    });
    shape.draw();


    window.requestAnimationFrame(draw);
  }

  draw();

  function polarCoords(x,y,r,angle) {
    return {
      x: x + (r * Math.cos(angle)),
      y: y + (r * Math.sin(angle))
    };
  }

  function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

}());
