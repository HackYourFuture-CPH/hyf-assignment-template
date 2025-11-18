const class07Students = [];

function addStudentToClass(studentName) {
  if (!studentName) {
    console.log("Add students name");
    return;
  }

  if (studentName === "Queen") {
    if (!class07Students.includes("Queen")) {
      class07Students.push(studentName);
    }
    console.log("Queen is already in the class");
    return;
  }

  if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log("Student " + studentName + " is already in the class");
  } else {
    class07Students.push(studentName);
  }
}

function getNumberOfStudents(studentsArray) {
  console.log("Students in the class: " + studentsArray.length);
}

addStudentToClass("Anastasia");
addStudentToClass("Anastasia");
addStudentToClass("Bob");
addStudentToClass("Bob");
addStudentToClass("");
addStudentToClass("Jack");
addStudentToClass("Jack");
addStudentToClass("");
addStudentToClass("Elena");
addStudentToClass("Maria");
addStudentToClass("Lucia");
addStudentToClass("Mark");
addStudentToClass("Tailor");
addStudentToClass("Queen");

console.log(class07Students);
getNumberOfStudents(class07Students);
