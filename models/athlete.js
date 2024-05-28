const { Schema, model } = require('mongoose');

const athleteSchema = new Schema({
    email: String,
    pass: String,
    name: String,
    lastName: String,
    dob: String,
    address: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
    waiver: Boolean,
    nationality: String,
    weight: Number,
    age: Number,
    current_rank: String,
    last_promotion: String,
    next_promotion: String,
    stripes:Number,
    signature: String,
    type: String,
    status: {
        type: String,
        required: true,
        default: 'pending'
    },
    role: {
        type: String,
        required: true,
        default: 'MEMBER'
    },
    active: Boolean,
    dateSignedIn: String,
    photoURL: String,
    emailVerified: Boolean,
});

athleteSchema.method('toJSON', function() {
    const { __v, pass, ...object } = this.toObject();
    return object;
});


module.exports = model('Athletes', athleteSchema);
