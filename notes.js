const fs = require('fs')
const chalk = require('chalk')

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
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.green.inverse('Note title taken.'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()

    // Create array of notes to keep
    const notesToKeep = notes.filter(function (note) {
        // Return true if notes do not match
        return note.title !== title
    })

    // If initial array is greater than new array a note was removed
    if (notes.length > notesToKeep.length){
        saveNotes(notesToKeep)

        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
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
    addNote: addNote,
    removeNote: removeNote
}