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
