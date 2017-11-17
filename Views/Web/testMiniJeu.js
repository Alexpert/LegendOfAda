window.onload = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getctx('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
