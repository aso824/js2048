/*
	Prototype below is used in Game prototype (game.js)
	This prototype handles grid map used in 2048, including movements
*/

function Grid2048() {
	// Map init
	var map = new Array(4);
	for (var i = 0; i < 4; i++) {
		map[i] = new Array(4);

		for (var j = 0; j < 4; j++)
			map[i][j] = 0;
	}
}