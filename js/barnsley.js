class Barnsley
{
	constructor(x, y)
	{
		this.x = 0;
		this.y = 0;
		this.pointRadius = 6;
	}

	update()
	{
	}

	drawFilledCircle(ctx, centerX, centerY, radius, color)
	{
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
		ctx.fill();
	}

	draw(ctx)
	{
		for (let i = 0; i < 20; i++)
		{
			let nextX, nextY;
			let r = Math.random();
			if (r < 0.01) {
				nextX =  0;
				nextY =  0.16 * this.y;
			} else if (r < 0.86) {
				nextX =  0.85 * this.x + 0.04 * this.y;
				nextY = -0.04 * this.x + 0.85 * this.y + 1.6;
			} else if (r < 0.93) {
				nextX =  0.20 * this.x - 0.26 * this.y;
				nextY =  0.23 * this.x + 0.22 * this.y + 1.6;
			} else {
				nextX = -0.15 * this.x + 0.28 * this.y;
				nextY =  0.26 * this.x + 0.24 * this.y + 0.44;
			}
			// Scaling and positioning
			let plotX = 600 * (this.x + 3) / 6;
			let plotY = 800 - 800 * ((this.y + 2) / 14);
			this.drawFilledCircle(ctx, plotX, plotY, this.pointRadius, "#77A668");
			this.x = nextX;
			this.y = nextY;
		}
	}
}
