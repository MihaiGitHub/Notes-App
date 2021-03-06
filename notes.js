const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    // Create an array of values that match with title
    // This function gets called 1 time for each note
    // Array will have 0 items if no duplicates found
    // Return true if duplicate, false if not duplicate
    //const duplicateNotes = notes.filter( (note) => note.title === title)

    // Use array method find, which stops once it finds the match
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.green.inverse('Note title taken.'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    // Create array of notes to keep
    // Return true if notes do not match
    const notesToKeep = notes.filter((note) => note.title !== title)

    // If initial array is greater than new array a note was removed
    if (notes.length > notesToKeep.length){
        saveNotes(notesToKeep)

        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

// Save notes to file system
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        // Creates a buffer of the file data
        const dataBuffer = fs.readFileSync('notes.json')
        // Turns buffer into a string
        const dataJSON = dataBuffer.toString()
        // Turn string into a json object
        return JSON.parse(dataJSON)
    } catch (e) {
        // If code above throws an error, no file exists so return an []
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.green.inverse('These are your notes!'))

    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = title => {
    const notes = loadNotes()

    const myNote = notes.find(note => {
        return note.title === title
    })

    if(myNote){
        console.log(chalk.green.inverse('Note Found!'), myNote.body)
    } else {
        console.log(chalk.red.inverse('Note Not Found!'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}