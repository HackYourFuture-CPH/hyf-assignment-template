const notes = [
  { content: "Pick up groceries", id: 1 },
  { content: "Do laundry", id: 2 },
];

function getNote(id) {
  if (typeof id !== "number") {
    console.log("Error: Please provide a number id");
    return;
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }

  console.log("Error: Note not found");
}

console.log(getNote(1));
console.log(getNote(2));
console.log(getNote(5));
console.log(getNote("aaa"));
