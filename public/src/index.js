function getLast(array) {
  return array[array.length-1];
}

function getReverse(array) {
  return array.reverse();
}

function getLength(array) {
  return array.length;
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


function getDuplicates(array) {
  for (let i = 0; i < array.length; i++) {
      for (j = i+1; i < array.length; i++) {
          if (i == j) {
              return true;
          } 
          
      }
  }
      return false;
}

function sortOrder(array) {
  if (array.length <= 1) {
    return array;
  } else {
    let left = [];
    let right = [];
    let newArray = [];
    let pivot = array.pop();

    for (let i = 0; i < array.length; i++) {
      if (array[i] <= pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }

    return newArray.concat(sortOrder(left), pivot, sortOrder(right));
  }
}

let studentsArray = ["Anna", "Crystal", "Ed", "Egle", "Geoff", "Kelvin", "Manisha", "Megan", "Melanie", "Ollie", "Peter", "Piers", "Taj", "Adrian", "Helen", "Jayda", "Lauren", "Lin", "Tan", "Anthony"]
let size = 4
function sortStudents(studentsArray, size){
  let groups = [ ]
  let currentGroup = [ ]
  // Loop over all the students
  while (studentsArray.length > 0) {
      // in each loop pick a random number
      let randomNumber = Math.floor(Math.random() * studentsArray.length)
      // in each loop then pick a random student
      let randomStudent = studentsArray[randomNumber]
      // in each loop then add random student to current group array
      currentGroup.push(randomStudent)
      // delete the random student that from the original 
      // array that as it is now living in the new current array
      studentsArray.splice(randomNumber, 1)
      // if the group size is large enough
      // add them to the groups array
      if (currentGroup.length >= size) {
          groups.push(currentGroup)
          // reset the current group
          currentGroup = [ ]
      }
  }
  
  if (currentGroup.length > 0) {
      groups.push(currentGroup)
  }
  
  for (let i = 0; i < groups.length; i++){
      console.log('Group Number'+(i+1)+": "+groups[i])
  }
}

// function duplicatesWithSort(array) {
//   array.sort()
//   result = []
//   while ( array.length != 0 ) {
//     var count = 1
//     var i = 0
//     var j = 1
//     while (array[i] === array[j]) {
//       count += 1
//       j += 1
//     }
//     for (var i = 0; i < count; i++) {
//       if ( count > 1 ) { result.push(array[i]) }
//     }
//     array.splice(0, count)
//   }
//   return result
// }

// const fruits = ['Apple', 'Banana'];

// console.log(fruits.length);
// const first = fruits[0]
// const last = fruits[fruits.length - 1];


// fruits.forEach(function(item, index, array) {
//   console.log(item, index);
// });

// const newLength = fruits.push('Orange');

// const last = fruit.pop();