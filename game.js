function Game(grid) {
	var map = undefined;
	var renderer = undefined;

	this.start = function() {
		this.map = new GameMap();
		this.renderer = new GameRenderer(grid, this.map);

		this.map.newRandomBlock();
		this.map.newRandomBlock();

		this.renderer.init();

		console.log(this.map.getMap());
		this.map.makeMove(0);
		console.log(this.map.getMap());
	};
}