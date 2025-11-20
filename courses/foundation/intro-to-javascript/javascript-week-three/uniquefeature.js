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




function checkReminders() {
    const now = new Date();

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];

        if (!note.reminderTime) continue;

        const reminderDate = new Date(note.reminderTime);

        if (now > reminderDate) {
            console.log("⏰ REMINDER: Note " + note.id + " (" + note.content + ") is due!");
        }
    }
} 
saveNote("Pick up groceries", 1, "2025-01-20 14:30");
saveNote("Do laundry", 2, "2025-01-20 18:00");


checkReminders();

