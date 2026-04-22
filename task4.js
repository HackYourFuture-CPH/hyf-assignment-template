//#4 Note taking app

//Save a note

let notes = [];

function saveNote(content, id) {
  notes.push({
    content: content,
    id: id,
  });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log("Current notes:", notes);

//Get a note by id

function getNote(id) {
  //Check if id is missing or not a number
  if (id === undefined || typeof id !== "number") {
    console.log("Error");
    return;
  }
  //Loop to find the note with the id
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i]; // return the note object
    }
  }
  //If the id is not found
  return "Not found";
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//Log out notes

function logOutNotesFormatted() {
  for (let note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text:${note.content}`
    );
  }
}

logOutNotesFormatted();

//Delete a note

//Keep undeleted notes
function deleteNote(id) {
  let newNotes = [];
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id !== id) {
      newNotes.push(notes[i]);
    }
  }
  notes = newNotes;

  renumberNotes();
  renderNotes();
}

function renumberNotes() {
  for (let i = 0; i < notes.length; i++) {
    notes[i].id = i;
  }
}
