const fs =require('fs');
const _ =require('lodash');

var addNote=(title,body)=>{
	var notes=getNote();
	note={
		title,
		body
	}
	const duplicateString= _.filter(notes,(note)=>{
		return note.title===title
	})
	if(duplicateString.length==0){
		notes.push(note)
		saveNote(notes);
		
	} else{
		console.log(title ,'!. already exist')
	}


}
var saveNote =(notes) =>{
	fs.writeFileSync('notes.json', JSON.stringify(notes));
}
var getNote=()=>{
	try{
		var notes= fs.readFileSync('notes.json');
		return JSON.parse(notes);
	} catch (e){
		return []
	}
}
var removeNote=(title)=>{
	var notes=getNote();
	const duplicateString= _.filter(notes,(note)=>{
		return note.title!==title
	})
	saveNote(duplicateString);
	return notes.length !== duplicateString.length
}

module.exports ={
	addNote,
	getNote,
	removeNote
}