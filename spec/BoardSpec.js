describe("Board", function() {
  var board;
  beforeEach(function() {
    board = new Board()
  });
  
  it("can contain a cell", function() {
    board.add("cell")
    expect(board.cells).toContain("cell");
  });
  
});  

