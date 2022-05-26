const mongoose = require('mongoose');

const devotionalSchema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    meditation: {
        type: String,
        required: true
    },
    pray: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: false
    },
    keywords: {
        type: String,
        required: false
    },
    audioUrl: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    bible_verse: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('devotional', devotionalSchema);
