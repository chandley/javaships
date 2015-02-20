function Cell() {
  this.contents = "water";
};

Cell.prototype.placeShip  =
function() {
  this.contents = "ship";
};

Cell.prototype.shoot =
function() {
  if (this.contents == "ship") { this.contents = "hit" }
  else { this.contents = "miss" }
};


