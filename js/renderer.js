class Renderer
{
	constructor()
	{
		this.c = new Coquette(this, "barnsley-fern-js", 800, 600,  "");
		this.c.entities._entities.push(new Barnsley(0, 0));
	}
}
