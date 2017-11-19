function Game(grid) {
	var map = undefined;
	var renderer = undefined;

	this.start = function() {
		this.map = new GameMap();
		this.renderer = new GameRenderer(grid, this.map);

		this.map.newRandomBlock();
		this.map.newRandomBlock();

		this.renderer.init();
	};

	this.doMove = function(direction) {
		if (this.map.makeMove(direction)) {
			this.map.newRandomBlock();
		}
		
		this.renderer.redraw();
	}
}