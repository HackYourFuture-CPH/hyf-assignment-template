const notes = [];

function saveNote(content, id) {
  const newNote = {
    content: content,
    id: id,
  };
  notes.push(newNote);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      return notes[i];
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote);

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i].id +
        ", has the following note text: " +
        notes[i].content
    );
  }
}

logOutNotesFormatted();

function removeNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      notes.splice(i, 1);
      return notes;
    }
  }
}

removeNote(1);
console.log(notes);
