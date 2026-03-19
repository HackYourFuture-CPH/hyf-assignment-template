const notes = [];
function saveNote(content, id) {
  notes.push({ content: content, id: id });
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);
//get a note
function getNote(id) {
  if (typeof id !== "number") {
    console.log("ID should be a number");
    return;
  }
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
}
//logout a note
function logoutNoteFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note content: ${notes[i].content}`
    );
  }
}
logoutNoteFormatted();
console.log(getNote(2));
console.log(getNote("2")); // ID should be a number
//delete a note by id
function deleteNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes.splice(i, 1);
      return;
    }
  }
}
deleteNote(1);
console.log(notes);
