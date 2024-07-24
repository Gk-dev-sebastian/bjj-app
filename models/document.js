
const { Schema, model } = require('mongoose');

const documentSchema = new Schema({
    title: String,
    subTitle: String,
    paragraphs: [String],
    img: String,          
    footer: String,
    date: {
        type: Date,
        default: Date.now 
    }
});

module.exports = model('Document', documentSchema);