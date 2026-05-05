//Get a note
const notes1 = [];

function saveNote(content, id) {
  const tasks={
    content:content,
    id:id
  };
notes1.push(tasks);
}
saveNote("Pick up groceries", 1);

saveNote("Do laundry", 2);

function getNote(id){
    if(id === undefined){

    console.log("Provide an id");
    return;
    }
    if(typeof id !== "number"){
        console.log("id is not a number");
        return;
    }
    for(let i=0;i<notes1.length;i++){
        if(notes1[i].id === id){
            return notes1[i];
        }
    }
}
const firstNote = getNote(2); 
console.log(firstNote);
