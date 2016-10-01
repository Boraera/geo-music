'use strict';

// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var musicianSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// the schema is useless so far
// we need to create a model using it
// make this available to our Node applications
module.exports = mongoose.model('Musician', musicianSchema);
