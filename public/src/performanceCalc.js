function testTime(testFunction) {
  // The testTime function takes one argument
  // this argument will be the function you are timing
  //for example testTime(getReverse)
  const times = []
  //the for loop below gives increments of 5000 from 0 to 100000
  for (let i = 0; i <= 100000; i += 5000) {
    // const array = [1, 2, ,3 , 4, 5, 6, 7, 8, 9, 10]
    
    // create an array from the function in generateArray.js
    // the generateArray function takes one argument - size
    // size is an integer provided, in this case the numbers
    // given in size will go to 100000 in increments of 5000
    // tl;dr create an array with ten numbers that are randomly
    // between 1-100
    const array = createArray(i);
    const t0 = performance.now();
    // Below you run the function giving it the
    // array that you have generated
    testFunction(array);
    const t1 = performance.now();
    // this pushes the time taken for each number in
    // the created array to run, into a times array
    times.push(t1-t0);
  };
  return times;
};

function testTimeArgs(testFunction, size) {
  // The testTime function takes one argument
  // this argument will be the function you are timing
  //for example testTime(getReverse)
  const times = []
  //the for loop below gives increments of 5000 from 0 to 100000
  for (let i = 0; i <= 100; i += 5) {
    // const array = [1, 2, ,3 , 4, 5, 6, 7, 8, 9, 10]
    
    // create an array from the function in generateArray.js
    // the generateArray function takes one argument - size
    // size is an integer provided, in this case the numbers
    // given in size will go to 100000 in increments of 5000
    // tl;dr create an array with ten numbers that are randomly
    // between 1-100
    let studentsArray = ["Anna", "Ed", "Egle", "Geoff", "Kelvin", "Manisha", "Megan", "Melanie", "Ollie", "Peter", "Piers", "Taj", "Adrian", "Helen", "Jayda", "Lauren", "Lin", "Tan", "Anthony"]
    let size = 4  
    const t0 = performance.now();
    // Below you run the function giving it the
    // array that you have generated
    sortStudents(studentsArray, size);
    const t1 = performance.now();
    // this pushes the time taken for each number in
    // the created array to run, into a times array
    times.push(t1-t0);
  };
  return times;
};