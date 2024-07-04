const { Schema, model } = require('mongoose');

const classSchema = new Schema({
    date: Date, // fecha específica de la clase
    start: String,
    end: String,
    professor: String,
    mat: String,
    description: String,
    program: {
        programName: String,
        description: String,
        date: String,
        week: Number,
        user: String
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
});

// Middleware para cerrar automáticamente la clase si se alcanza la capacidad máxima
classSchema.pre('save', function(next) {
    if (this.booked >= this.capacity) {
        this.status = 'closed';
    }
    next();
});

module.exports = model('Class', classSchema);
