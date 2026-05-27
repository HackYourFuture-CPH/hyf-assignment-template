const notes = [];
//create function saveNote
function saveNote(content, id) {
  if (typeof id !== "number" || id <= 0) {
    console.log("Invalid id. Must be a positive number greater than 0.");
    return;
  }
  if (typeof content !== "string" || content.trim() === "") {
    console.log("Invalid content. Must be a non-empty string.");
    return;
  }
  notes.push({ content, id });
}
//get note  by id with validation
function getNote(id) {
  if (typeof id !== "number" || id <= 0) {
    console.log("Please, add a number for id greater than 0!");
    return null;
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }

  console.log("No note found with id:", id);
  return null;
}
//get all notes in formatted style
function logOutNotesFormatted() {
  if (notes.length === 0) {
    console.log("No notes saved yet.");
    return;
  }

  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    console.log(
  "The note with id: " + note.id + " has the following note text: " + note.content + "."
);
   
  }
}
// Example usage:
saveNote("plan a meeting", 1);
saveNote("set Agendas", 2);
saveNote("send invitation email", 3);
saveNote("prepare for the presentation", 4);

console.log(notes);

const firstNote = getNote(1); 
console.log(firstNote);

logOutNotesFormatted();