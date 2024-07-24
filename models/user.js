const { Schema, model } = require('mongoose');
const Document = require('./document'); // Asegúrate de que la ruta es correcta

const userSchema = new Schema({
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
    signature: String,
    type: String,
    bio: String,
    todo: [{
        type: Schema.Types.ObjectId,
        ref: 'Document'
    }],
    status: {
        type: String,
        required: true,
        default: 'active'
    },
    role: {
        type: String,
        required: true,
        default: 'ADMIN'
    },
    classPay: Number,
    active: Boolean,
    dateSignedIn: String,
    photoURL: String,
    emailVerified: Boolean,
});

userSchema.method('toJSON', function() {
    const { __v, pass, ...object } = this.toObject();
    return object;
});

module.exports = model('User', userSchema);

