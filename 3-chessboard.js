// Solution 1

var char = '';
for (var i = 0; i < 8; i++) {
  char += '\n'
  for (var j = 1; j <= 8; j++) {
    if (j%2 == 0) {
      char += '.';
    }
    else {
      char += '#';
    }
  }
}
console.log(char);
// :( Not able to solve


// Original Answer
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
