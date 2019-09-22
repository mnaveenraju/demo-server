'use strict';

const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const demoMdl = new Schema({
    name: {
        type: String, 
        unique: true, 
        required: true
    },
    type: {
        type: String,
        required: true
    },
    list: {
        type: [String]
    },
    createdAt: Date,
    createdBy: String,
    updatedAt: Date,
    updatedBy: String
});

mongoose.model('demo', demoMdl);