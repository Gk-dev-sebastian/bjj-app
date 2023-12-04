const { Schema, model } = require('mongoose');

const drillSchema = new Schema({
    drill: String
}, { _id: false });

const curriculumSchema = new Schema({
    groupName: String,
    drills: [drillSchema]
});

const weekSchema = new Schema({
    weekName: String, 
    curriculum: [curriculumSchema]
});

const techniqueSchema = new Schema({
    technique: String
}, { _id: false });

const techniquesGroupSchema = new Schema({
    groupName: String,
    techniques: [techniqueSchema]
});

const programSchema = new Schema({
    programName: String,
    description: String,
    date: String,
    weeks: [weekSchema],
    mainConcepts: [String],
    mainPositions: [String],
    techniques: [techniquesGroupSchema],
    user: String
});

const classSchema = new Schema({
    date: Date, // fecha específica de la clase
    start: String,
    end: String,
    professor: String,
    mat: String,
    description: String,
    program: [programSchema],
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
