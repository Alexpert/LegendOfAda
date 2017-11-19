
function GameObject() {
	this.x = 0;
	this.y = 0;
	this.velocity = new function() {
		this.x = 0;
		this.y = 0;
	}
	this.width = 0;
	this.height = 0;
	this.image = null;
	this.text = null;

	this.contains = function(x, y) {
		return (x >= this.x && x <= this.x + this.width)
			&& (y >= this.y && y <= this.y + this.height);
	}
}

let game = new function() {
	this.canvas = document.createElement('canvas');

	this.canvas.onclick = function(event) {
		let x = event.clientX / game.horizontal(1);
		let y = event.clientY / game.vertical(1);

		if(typeof clicked == 'function')
			clicked(x, y);
	}

	this.horizontal = function(x) {
		return x * this.canvas.clientWidth;
	}

	this.vertical = function(y) {
		return y * this.canvas.clientHeight;
	}

	this.setFontSize = function(sizePc) {
		let sizePx = sizePc * this.canvas.clientHeight;
		this.context.font = sizePx + 'px Montserrat, sans-serif';
	}

	this.setBackground = function(path) {
		document.body.style.backgroundImage = 'url(' + path + ')';
	}

	this.createImage = function(path) {
		var image = document.createElement('img');
		image.src = path;

		return image;
	}

	this.clearAll = function() {
		this.canvas.clearRect(0, 0,
			this.canvas.clientwidth, this.canvas.clientHeight);
	}

	this.clear = function(object) {
		let x = this.horizontal(object.x);
		let y = this.vertical(object.y);
		let width = this.horizontal(object.width);
		let height = this.vertical(object.height);

		this.context.clearRect(x, y, width, height);
	}

	this.move = function(object) {
		object.x += object.velocity.x * 0.020;
		object.y += object.velocity.y * 0.020;
	}

	this.fill = function(style) {
		this.context.fillStyle = style;
	}


	this.stroke = function(style) {
		this.context.strokeStyle = style;
	}

	this.draw = function(object) {
		let x = this.horizontal(object.x);
		let y = this.vertical(object.y);
		let width = this.horizontal(object.width);
		let height = this.vertical(object.height);

		if(object.image != null)
			this.context.drawImage(object.image, x, y, width, height);

		if(object.text != null) {
			var textWidth = this.context.measureText(object.text).width;
			if(textWidth > width)
				textWidth = width;

			let fx = x + (width - textWidth) / 2;
			let fy = y + height / 2;
			this.context.fillText(object.text, fx, fy, textWidth);
		}
	}

	this.update = function(object) {
		this.clear(object);
		this.move(object);
		this.draw(object);
	}

	this.start = function() {
		this.canvas.width = document.body.clientWidth-3;
		this.canvas.height = document.body.clientHeight-3;
		document.body.appendChild(this.canvas);
		this.context = this.canvas.getContext('2d');

		this.setFontSize(0.1);

		if(typeof setup == 'function')
			setup();

		this.timerId = setInterval(update, 20);
	}

	this.end = function(score) {
		clearInterval(this.timerId);
	}
}
