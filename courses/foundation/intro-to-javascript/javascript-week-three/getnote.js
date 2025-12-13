
const notes = [];

function saveNote(content, id) {
    const note = {
        content: content,
        id: id,
        
    };
    notes.push(note);

    }
    saveNote("Pick up groceries", 1);
    saveNote("Do laundry", 2);

    


function getNote(id) {
  
  for(let i=0; i<notes.length; i++){
    if (notes[i].id === id){
        return notes[i];
    }
  }
 return null;
}
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}
