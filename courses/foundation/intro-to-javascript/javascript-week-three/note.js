
const notes = [];

function saveNote(content, id,reminderTime = null)  {
    const note = {
        content: content,
        id: id,
        reminderTime: reminderTime
    };
    notes.push(note);

    }


    saveNote("Pick up groceries", 1);
    saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]


