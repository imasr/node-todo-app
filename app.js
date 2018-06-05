const yargs = require('yargs')
const notes = require('./notes');

const args=yargs.argv;
const command =args._[0]
if(command=='add'){
    notes.addNote(args.title, args.body)
} else if(command=='remove'){
    var removedNotes=notes.removeNote(args.title)
    var message = removedNotes ? "notes removed!":" notes not found";
    console.log(message)
}
