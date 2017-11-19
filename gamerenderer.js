function GameRenderer(grid, map) {
	this.init = function() {
		this.redraw();
	}

	this.redraw = function() {
		grid.empty();

		map.getMap().forEach(function(row, y) {
			row.forEach(function(cell, x) {
				var newCell = $('<div></div>').addClass('grid-cell gblock gb-' + cell);

				if (cell > 0) {
					newCell.text(cell);
				}
				
				grid.append(newCell);
			});
		});
	}
}