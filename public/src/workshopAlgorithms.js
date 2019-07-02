// Assigning Students into groups
// Given a list of students, and a target number of groups, create an algorithm to assign students into the right number of groups, of equivalent sizes (groups cannot have more than one person difference).

// Finding duplicates
// Given a list of things (numbers or words), return all the elements that are duplicated in the list.

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