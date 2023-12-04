
require( 'dotenv' ).config();

const path = require('path');

const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');

// express server
const app = express();

//cors
app.use( cors() );

//body
app.use( express.json() );

// DB connection
dbConnection();

// public
app.use( express.static('public'));

//helmet
//const helmet = require('helmet');
//app.use(helmet());

// routes
app.get('/healthapi', (req, res) => {
    res.status(200).send("Servidor en funcionamiento");
});
// users
app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/users', require('./routes/users.route'));
app.use('/api/athletes', require('./routes/athletes.route'));
//app.use('/api/uploadPics', require('./routes/uploadPics.route'));
//app.use('/api/billing', require('./routes/billing.route'));
//app.use('/api/search', require('./routes/search.route'));
//----------------
app.use('/api/documents', require('./routes/documents.route'));
//----------------
app.use('/api/website', require('./routes/website.route'));
//app.use('/api/messages', require('./routes/messages.route'));
//app.use('/api/blog', require('./routes/blog.route'));
//----------------
app.use('/api/curriculum', require('./routes/curriculum.route'));
app.use('/api/programs', require('./routes/programs.route'));
app.use('/api/schedule', require('./routes/schedule.route'));
app.use('/api/classes', require('./routes/classes.route'));
//app.use('/api/booking', require('./routes/booking.route'));
//----------------


app.get('*', (req, res) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
});


//index folder

app.listen( process.env.PORT, () => {
    console.log( 'Server running port ' + process.env.PORT );
});