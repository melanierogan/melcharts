function createArray(size) {
  array = [];
  let i;
  // while i is less than the number passed 
  // through to size, add one 
  for (i = 0; i < size; i++) {
    // returns a random whole number between 1 and 100 and pushes it into an array
    // as this is a loop, it will do this 10 times if size is 10
    array.push(Math.floor(Math.random() * 101));
  };
  return array;
}