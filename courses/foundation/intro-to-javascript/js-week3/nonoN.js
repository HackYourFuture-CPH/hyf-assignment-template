//NOnoN0nOYes (Note taking app)
//Save a note

const notes = [];

function saveNote(content, id) {
  const tasks={
    content:content,
    id:id
  };
notes.push(tasks);
}
saveNote("Pick up groceries", 1);

saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1},
//  {content: 'Do laundry', id: 2}]

