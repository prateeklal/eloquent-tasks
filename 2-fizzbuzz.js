// Solution 1
for(var i = 1; i <= 100; i++) {
  var placeholder = i, count = 0;
  if(i % 3 == 0) {
   placeholder = 'Fizz';
   count++;
  }
  if(i % 5 == 0) {
   placeholder = 'Buzz';
   count++;
  }
  if(count == 2) {
   placeholder = 'FizzBuzz'
  }
  console.log(placeholder);
}

// Solution 2
for(var i = 1; i <= 100; i++) {
  var placeholder = i;
  if(i % 3 == 0) {
   placeholder = 'Fizz';
  }
  if(i % 5 == 0) {
    if(typeof placeholder == 'string')
     placeholder += 'Buzz';
    else
      placeholder = 'Buzz';

  }
  console.log(placeholder);
}

// Solution 3
for(var i = 1; i <= 100; i++) {
  var placeholder = '';
  if(i % 3 == 0) {
   placeholder = 'Fizz';
  }
  if(i % 5 == 0) {
    placeholder += 'Buzz';

  }
  console.log(placeholder||i);
}

// Original Answer
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}
