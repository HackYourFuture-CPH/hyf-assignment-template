
//Student Manager
class07Students = [];
function addStudentToClass(studentName) {
  if (!studentName) {
    console.log("Name is mandatory");
     return ;
  }
  if(studentName === "Queen"){
    class07Students.push(studentName);
    console.log("Queen added to the class(Always allowed)");
    
    return;
  }
  if (class07Students.includes(studentName)){
    console.log("Student " + studentName + " is already in the class");
    
  } 
  if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
    return;
  }
    class07Students.push(studentName);
    console.log("Student " + studentName + " added to the class");
    
}
function getNumberOfStudents() {
  const noOfStudents = class07Students.length;
  return noOfStudents;  
}
addStudentToClass("Shilpa");
addStudentToClass("Anita");
addStudentToClass("John");
addStudentToClass("Mary");
addStudentToClass("Steve");
addStudentToClass("Lucy");
addStudentToClass("Mark");
addStudentToClass("Queen");
addStudentToClass("Anita");
console.log("Number of students:" +getNumberOfStudents());
console.log("Students in class 07:" +class07Students);