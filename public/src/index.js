function getLast(array) {
  return array[array.length-1];
}

function getReverse(array) {
  return array.reverse();
}

function getLength(array) {
  return array.length();
}

function getShuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }

  return array;
}


// const fruits = ['Apple', 'Banana'];

// console.log(fruits.length);
// const first = fruits[0]
// const last = fruits[fruits.length - 1];


// fruits.forEach(function(item, index, array) {
//   console.log(item, index);
// });

// const newLength = fruits.push('Orange');

// const last = fruit.pop();