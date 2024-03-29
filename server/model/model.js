const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    firstname : {
        type : String,
        required: true
    },
    secondname : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    pwd: {
        type: String,
        required: true
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;