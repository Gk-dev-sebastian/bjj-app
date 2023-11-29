const { Schema, model } = require('mongoose');

const classSchema = new Schema({
    date: Date, // fecha específica de la clase
    start: Date,
    end: Date,
    professor: String,
    mat: String,
    description: String,
    program: {
        type: Schema.Types.ObjectId, 
        ref: 'Program' 
    },
    capacity: Number,
    duration: Number, // Duración en minutos
    name: String,
    booked: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: 'open',
        enum: ['open', 'closed']
    },
    athletes: [{
        type: Schema.Types.ObjectId,
        ref: 'Athlete' 
    }],
    video: [{
        type: String, // URL o ruta del video
        title: String, // Título del video (opcional)
        description: String // Descripción del video (opcional)
    }]
});

// Middleware para cerrar automáticamente la clase si se alcanza la capacidad máxima
classSchema.pre('save', function(next) {
    if (this.booked >= this.capacity) {
        this.status = 'closed';
    }
    next();
});

module.exports = model('Class', classSchema);
