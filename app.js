const getNotes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
const command = process.argv[2]

// Customize yargs version
yargs.version('1.1.0')

// Add command
// The options object is where we customize how this command should work
yargs.command({
    command: 'add', // command name
    describe: 'Add a new note', // describe what the command is supposed to do
    handler: function () { // function that gets executed when command gets used
        console.log('adding a new note')
    }
})

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('removing a note')
    }
})

// Remove list
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: function () {
        console.log('listing all the notes')
    }
})

// Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading all the notes')
    }
})

// Can view commands that you have access to
console.log(yargs.argv)