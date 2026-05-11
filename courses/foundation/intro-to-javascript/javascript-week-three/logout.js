
const notes = [];

function saveNote(content, id)  {
    const note = {
        content: content,
        id: id,
        
    };
    notes.push(note);

    }


    saveNote("Pick up groceries", 1);
    saveNote("Do laundry", 2);




function logOutNotesFormatted() {
    for (let i=0; i<notes.length; i++){
        console.log("The note with id: " + notes[i].id + ", has the following note text: " + notes[i].content);
    }
}

logOutNotesFormatted(); 