const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Add command
// The options object is where we customize how this command should work
yargs.command({
    command: 'add', // command name
    describe: 'Add a new note', // describe what the command is supposed to do
    builder: { // additional arguments for this command to take
        title: {
            describe: 'Note title',
            demandOption: true, // makes this argument (title) as required
            type: 'string' // requires this argument to be a string
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { // function that gets executed when command gets used
       notes.addNote(argv.title, argv.body)
    }
})

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Remove list
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler() {
        console.log('listing all the notes')
    }
})

// Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading all the notes')
    }
})

// goes through the process of parsing the arguments with all configuration details provided
yargs.parse()

// Can view commands that you have access to
//console.log(yargs.argv)