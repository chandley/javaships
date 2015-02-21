function Board () {
this.cells = []
}
Board.prototype.add  =
function(cell) {
  this.cells.push(cell)
};

Board.prototype.shootAt =
function(cell) {
  cell.shoot();
}
