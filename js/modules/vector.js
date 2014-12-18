(function(){
  'use strict';

  var Vector = function(ctx, points) {
    this.ctx = ctx;
    this.points = points;
  };

  Vector.prototype.update = function(props) {
    if(props.ctx) this.ctx = props.ctx;
    if(props.points) this.points = props.points;
  };

  Vector.prototype.draw = function() {

    this.ctx.beginPath();
    for (var i = 0; i < this.points.length; i++) {
      this.ctx.moveTo(this.points[i].x,this.points[i].y);

      for (var j = 0; j < this.points.length; j++) {
        this.ctx.lineTo(this.points[j].x,this.points[j].y);
      }

      this.ctx.fillStyle = 'rgba(190, 222, 77, 0.2)';
      this.ctx.closePath();
      this.ctx.fill();
    }

  };

  module.exports = Vector;

}());
