const notes = [
  { content: "Pick up groceries", id: 1 },
  { content: "Do laundry", id: 2 },
];

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];

    console.log(
      "The note with id: " +
        note.id +
        ", has this note text: " +
        note.content
    );
  }
}

logOutNotesFormatted();
