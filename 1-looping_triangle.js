// Solution 1 -
for (var i = '#'; i <= '#######'; i+='#') {
  console.log(i);
}

// Solution 2 -
var times = 7;
var char = '';
for(var i = 1; i <= times; i++)
  console.log(char +='#');


// Original Answer
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

// Dammmmmmmnnnnnn! I was close :D
