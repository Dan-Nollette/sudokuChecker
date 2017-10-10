//Business logic
function Squares_array(starting_array){
  this.squares = [];
  for (var i = 0; i <= 9; i += 1){
    for (var j = 0; j <= 9; j += 1){
      squares.push([i,j,starting_array.pop]);
    }
  }
}

Squares_array.prototype.checkRowsAndColumns = function(){
  validity = true;
  for(var i = 0; i < 9; i += 1){
    collectedValuesRows =[]
    collectedValuesColumns =[]
    this.squares.forEach(function(square)){
      if (square[0] == i){
        collectedValuesRows.push(square[2])
      }
      if (square[1] == i){
        collectedValuesColumns.push(square[2])
      }
    };
    if (collectedValuesRows.sort != [1, 2, 3, 4, 5, 6, 7, 8, 9] || collectedValuesColumns.sort != [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      validity = false;
    }
  }
  return validity;
};

Squares_array.prototype.checkThreeByThree = function(){
  validity = true;
  for(i = 0; i < 3; i += 1){
    for(j = 0; j < 3; j += 1){
      collectedValuesBox = [];
      this.squares.forEach(function(square)){
        if (((square[0])/3).floor == i && ((square[1])/3).floor == j){
          collectedValuesBox.push(square[2])
        }
      }
      if (collectedValuesBox.sort != [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        validity = false;
      }
    }
  }
};

Squares_array.prototype.allValid = function(){
  return self.checkThreeByThree && self.checkRowsAndColumns && self.squares.length == 81
}

new

// temp = Squares_array([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
//
// expect temp.allValid.to.eq (false)
