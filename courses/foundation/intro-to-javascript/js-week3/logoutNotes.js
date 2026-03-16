//Log out notes
const notes2 = [];

function saveNote(content, id) {
  const tasks={
    content:content,
    id:id
  };
notes2.push(tasks);
}
saveNote("Pick up groceries", 1);

saveNote("Do laundry", 2);
function logOutNotesFormatted(){
   
   for(let i=0; i<notes2.length;i++) {
    const note = notes2[i];

      console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`)
    
   }
}
logOutNotesFormatted();