const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()

    // Create an array of values that match with title
    // This function gets called 1 time for each note
    // Array will have 0 items if no duplicates found
    const duplicateNotes = notes.filter(function (note) {
        // Return true if duplicate, false if not duplicate
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken.')
    }
}

// Save notes to file system
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
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

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}