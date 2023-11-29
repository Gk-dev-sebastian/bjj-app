const { Schema, model } = require('mongoose');

const dayScheduleSchema = new Schema({
    day: Date, 
    dayName: String, // Puede ser "Monday", "Tuesday", etc.
    workingDay: String,
    classes: [{
        class: {
            type: Schema.Types.ObjectId,
            ref: 'Class'
        }
    }]
}, { _id: false });

const scheduleSchema = new Schema({
    weekStarting: Date,
    days: [dayScheduleSchema]
});

module.exports = model('Schedule', scheduleSchema);
