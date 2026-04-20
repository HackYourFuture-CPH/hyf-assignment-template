
// Student manager


let newStudentName = prompt("Enter the name of a new student.");

let class07Students = ["Ann", "Bob", "Sam", "Abby", "Brandon", "Carry"];
const queenOfDenmark = "Queen";

// addStudentToClass function

function addStudentToClass(studentName) {
    if (newStudentName == "Queen") {
        class07Students.push(studentName);
        return;
    } 
    if (studentName === "") {
       console.log("You cannot add an empty string to a class");
        return;
    }    
    
   if (class07Students.includes(studentName)) {
    console.log(`${studentName} is already in the class`);
    return;
    } 

    if (class07Students.length < 6 ) {
        class07Students.push(studentName);
    }
    
        console.log("You cannot add more students to class 07");
    
}

addStudentToClass(newStudentName);
console.log(class07Students);


function getNumberOfStudents() {
    return class07Students.length;
}

console.log(getNumberOfStudents());
  