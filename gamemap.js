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

	/**
	 * Rotate map array by (+/-){90, 180, 270} degrees.
	 * Helper function for makeMove()
	 *
	 * @param int deg Degree to rotate
	 */
	this.rotateMap = function(deg) {
		if (deg == 0)
			return;

		if (deg == 90) {
			// Transpose array
			map = map[0].map((col, i) => map.map(row => row[i]));

			map.forEach(function(row, y) {
				map[y].reverse();
			});
		} else if (deg == -90) {
			// Ugly solution,but reverse+transpose didn't worked
			this.rotateMap(180);
			this.rotateMap(90);
		} else if (deg == 180 || deg == -180) {
			this.rotateMap(90);
			this.rotateMap(90);
		} else if (deg == 270) {
			this.rotateMap(-90);
		} else if (deg == -270) {
			this.rotateMap(90);
		} else {
			console.error('Invalid rotateMap() argument: "' + deg + '"');
			return false;
		}
	}

	/**
	 * Make map move.
	 * @param int direction Move direction {0, 1, 2, 3}, counter-clockwise, starting from left
	 */
	this.makeMove = function(direction) {
		// Rotate map to make move to left
		this.rotateMap(direction * 90);

		// Move all cells to left
		map.forEach(function(row, y) {
			// Move cells to left
			map[y] = map[y].filter(function(cell) {
				return cell > 0;
			});

			// Join cells
			var loopStop = map[y].length - 1;
			for (var i = 0; i < loopStop; i++) {
				if (map[y][i] == map[y][i + 1]) {
					map[y][i] *= 2;
					map[y].splice(i + 1, 1);
					loopStop--;
				}
			}

			// Fill space with empty cells
			while (map[y].length < 4) {
				map[y].push(0);
			}
		});

		// Revert rotation from beginning of this function
		this.rotateMap(-direction * 90);
	}
}