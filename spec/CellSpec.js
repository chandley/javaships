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
    
});  

