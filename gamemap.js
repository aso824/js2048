/*
	Prototype below is used in Game prototype (game.js)
	This prototype handles grid map used in 2048, including movements
*/

function GameMap() {
	// Map array init
	var map = new Array(4);

	for (var i = 0; i < 4; i++) {
		map[i] = new Array(4);

		for (var j = 0; j < 4; j++)
			map[i][j] = 0;
	}

	/**
	 * Return whole map.
	 */
	this.getMap = function() {
		return map;
	}

	/**
	 * Create block with 2 or 4 in random place.
	 */
	this.newRandomBlock = function() {
		var availableCoordinates = [];

		map.forEach(function(row, y) {
			row.forEach(function(cell, x) {
				if (cell == 0) {
					availableCoordinates.push([y, x]);
				}
			});
		});

		if (availableCoordinates.length == 0)
			return false;

		var cellCoordinates = availableCoordinates[Math.floor(Math.random() * availableCoordinates.length)];
		map[cellCoordinates[0]][cellCoordinates[1]] = [2, 4][Math.floor(Math.random() * 2)];

		return true;
	}
}