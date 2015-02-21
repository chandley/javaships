describe("Board", function() {
  var board;
  beforeEach(function() {
    board = new Board()
  });
  
  it("can contain a cell", function() {
    board.add("cell")
    expect(board.cells).toContain("cell");
  });
  
 it("can shoot a cell", function() {
    cell = jasmine.createSpyObj('cell',['shoot']);
    board.add(cell);
    board.shootAt(cell);
    expect(cell.shoot).toHaveBeenCalled();
  });
 
});  

