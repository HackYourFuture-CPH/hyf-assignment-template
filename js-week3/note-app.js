const notes = [];
//create function saveNote
function saveNote(content, id) {
  // write some code here
  notes.push({content:content,id:id});
}
//create function getNote
function getNote(id) {
    if(typeof id!=="number"|| id<=0){
        console.log("error: id must be a positive number greater than zero");
     return null
    }
  // your code here
  for(let i=0; i<notes.length; i++)
  { if(notes[i].id===id){
    return notes[i]
  }
}

}
  function logOutNotesFormatted() {
  // your code here
  for(let i=0; i<notes.length; i++){
    const note= notes[i];
    console.log("The note with id: " + note.id + " has the following note text: "+ note.content+".");
  }
}
  
saveNote("plan a meeting", 1);
saveNote("set Agendas ", 2);
saveNote("send invitation email", 3);
saveNote("prepare for the presentation ", 4);
 
console.log(notes); 
const firstNote = getNote(-1);
console.log(firstNote);
logOutNotesFormatted();
