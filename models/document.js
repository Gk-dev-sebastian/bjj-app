
const { Schema, model } = require('mongoose');

const documentSchema = new Schema({
    title: String,
    subTitle: String,
    paragraphs: [String], // Array de strings para guardar varios párrafos
    img: String,          // Podrías almacenar una URL o referencia a la imagen
    footer: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now // Esto automáticamente asignará la fecha y hora actuales
    }
});

const Document = model('Document', documentSchema);

module.exports = Document;
