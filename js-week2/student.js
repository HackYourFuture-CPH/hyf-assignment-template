const class07Students = [];
const queenOfDenmark="Queen"
function addStudentToClass(studentName) {
    if(class07Students.length >=6 && studentName !=="Queen"){
        console.log("Cannot add more students to class 07");
    return;}
 if(class07Students.includes(studentName)){
    console.log("student"+studentName+":already in the class")
 }
 else if(!studentName || studentName.trim() === ""){
    console.log("cannot add an empty string to the class");}
else {
  class07Students.push(studentName)
  console.log("student"+studentName+ ": added  to the class")
}
}

function getNumberOfStudents(){
    return class07Students.length;
}
addStudentToClass("Anna")
addStudentToClass("Peter")
addStudentToClass("carlos")
addStudentToClass("Lars")
addStudentToClass("Mars")
addStudentToClass("Elias")
addStudentToClass("Hanna")
addStudentToClass("Queen")
addStudentToClass("Anna")
addStudentToClass(" ")
console.log(getNumberOfStudents());