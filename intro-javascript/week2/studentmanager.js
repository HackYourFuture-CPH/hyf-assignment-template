const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("You need to write a name!");
  } else if (class07Students.includes(studentName)) {
    console.log("Student " + studentName + " is already in the class");
  } else if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log("Cannot add more students to class 07");
  } else {
    class07Students.push(studentName);
    console.log(studentName + " has been added to the class");
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Jack");
addStudentToClass("Joe");
addStudentToClass("Catherine");
addStudentToClass("Ann");
addStudentToClass("Merry");
addStudentToClass("Julia");
addStudentToClass("Peter");
addStudentToClass("Robert");
addStudentToClass("Henrik");
addStudentToClass("");

console.log("Number of students:", getNumberOfStudents());
console.log("Students in class:", class07Students);
