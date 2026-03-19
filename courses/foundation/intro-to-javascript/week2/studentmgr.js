const class01Students = [];
function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("You cannot add an empty name");
    return;
  }
  if (class01Students.includes(studentName)) {
    console.log("Student " + studentName + " is already in the class");
    return;
  }
  if (studentName === "Queen") {
    class01Students.push(studentName);
    console.log("The Queen has been added to the class");
    return;
  }
  if (class01Students.length >= 6) {
    console.log("Cannot add more students to class 01,class is full");
    return;
  }
  class01Students.push(studentName);
  console.log("Student " + studentName + " has been added to the class");
}
function getNumberOfStudents() {
  return class01Students.length;
}
addStudentToClass("Jyoti");
addStudentToClass("Rashmi");
addStudentToClass("");
addStudentToClass("Jyoti");
addStudentToClass("Annamani");
addStudentToClass("Queen");
console.log(class01Students);
console.log("Number of students:  " + getNumberOfStudents());
