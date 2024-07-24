
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

const Document = model('Document', documentSchema);

module.exports = Document;
