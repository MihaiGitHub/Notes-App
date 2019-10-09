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

// Can view commands that you have access to
console.log(yargs.argv)