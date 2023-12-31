

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const dbConnection = async () => {

    try {

        await mongoose.connect( process.env.DB_CNN ,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            autoIndex: false, // Don't build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6
        });
        
        console.log('DB online');
        return mongoose;

    } 
    
    catch (error) {

        console.log( error );
        throw new Error('database connection error');

    }
}

module.exports = { dbConnection }