



const class07Students = [];

function addStudentToClass(studentName) {
  // reject empty or whitespace-only names
  if (!studentName || studentName.trim().length === 0) {
    return;
  }

  const name = studentName.trim();
  const nameLower = name.toLowerCase();

  // prepare lowercase list for case-insensitive checks
  const lowercasedStudents = class07Students.map(s => s.toLowerCase());

  // duplicate check (case-insensitive)
  if (lowercasedStudents.includes(nameLower)) {
    console.log(`Student ${name} is already in the class`);
    return;
  }

  // Queen always allowed (accept any capitalization)
  if (nameLower === 'queen') {
    class07Students.push(name);
    return;
  }

  // max 6 students (excluding possible Queen additions)
  if (class07Students.length >= 6) {
    console.log('Cannot add more students to class 07');
    return;
  }

  // add student
  class07Students.push(name);
}

function getNumberOfStudents() {
  return class07Students.length;
}

/* --- Example usage --- */

addStudentToClass('Benjamin');
addStudentToClass('Benjamin'); // logs: Student benjamin is already in the class
addStudentToClass('Anna');
addStudentToClass('sofia');
addStudentToClass('Liam');
addStudentToClass('Olivia');
addStudentToClass('Noah');

console.log('Count before overflow attempt:', getNumberOfStudents()); // 6

addStudentToClass('Emma'); // logs: Cannot add more students to class 07

addStudentToClass('QUEEN'); // Queen added despite class being full

console.log('Students:', class07Students);
console.log('Final count:', getNumberOfStudents()); 
