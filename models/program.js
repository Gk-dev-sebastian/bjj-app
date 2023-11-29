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

module.exports = model('Program', programSchema);
