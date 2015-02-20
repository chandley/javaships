describe("Cell", function() {
  var cell;

  beforeEach(function() {
    cell = new Cell()
  });
  it("starts off as water", function() {
    expect(cell.contents).toEqual("water")
  });
        
  it("can contain a ship", function() {
    cell.placeShip();
    expect(cell.contents).toEqual("ship");
  });

  describe("shooting", function() {
    it("water registers a miss", function() {
      cell.shoot();
      expect(cell.contents).toEqual("miss")
    });

    it("ship registers a hit", function() {
      cell.placeShip();
      cell.shoot();
      expect(cell.contents).toEqual("hit");
    });
    
    
  });
  
});  

