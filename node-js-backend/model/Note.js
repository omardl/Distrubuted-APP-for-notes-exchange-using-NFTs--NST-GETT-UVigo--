const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Note = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }, 
    image: {
        type: String
    },
    token_URI: {
        type: String
    },
    owner: {
        type: String
    }, 
    document: {
        type: String
    }
}, {
    collection: 'notes'
})
module.exports = mongoose.model('Note', Note)