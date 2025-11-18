//Smart-ease - Back to the basics!
//NOnoN0nOYes (Note taking app)

//1->Save a note

const notes=[];

function saveNote(content,id){
notes.push({Content: content,Id:id});
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Buy Items",3);
console.log(notes);