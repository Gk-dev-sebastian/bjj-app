const { Schema, model } = require('mongoose');

const conditionsItemsSchema = Schema({
    name: String,
    medication: String
});

const athleteSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _id:String,
    email: String,
    name: String,
    lastName:String,
    dob:String,
    nationality:String,
    weight:Number,
    age:Number,
    rank:String,
    healthConditions:Boolean,//*
    conditions:[conditionsItemsSchema],
});

module.exports = model('Athletes', athleteSchema);
