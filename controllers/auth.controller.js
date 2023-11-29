

const { response } = require('express');
const bCrypt = require('bcryptjs');
const User = require('../models/user');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
//token
const generateJTW = require('../helpers/jwt');


const signIn = async( req, res = response ) => {

    const { email, pass } = req.body;

    try { 

        const userDB = await User.findOne({ email });

        // verify email

        if ( !userDB ) {

            return res.status(404).json({
               ok:false,
               msg:'Email or password are wrong'
            });

        }

        // verify pass 
        const validPass = bCrypt.compareSync( pass, userDB.pass );
        
        if( !validPass ) {

            return res.status(400).json({
                ok:false,
                msg:'Email or password are wrong'
             });

        }

        // create token 
        const token = await generateJTW( userDB._id, userDB.name, userDB.email, userDB.role );   

        const userResponse = {
            _id: userDB._id,
            name: userDB.name,
            lastName: userDB.lastName,
            email: userDB.email,
            status: userDB.status,
            role: userDB.role,
            //...
        };

        res.json({
            ok: true,
            token,
            user: userResponse
        });

    } catch(error) { 

        console.log( error );
        res.status(500).json({
            ok:false,
            msg:'Unexpected Error'
        });

    }
}

const renewToken = async (req, res = response) => {

    const _id = req._id;

    try {
        
        const userDB = await User.findById(_id);

        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg: 'User not found'
            });
        }

        const token = await generateJTW(userDB._id, userDB.name, userDB.email);

        const userResponse = {
            _id: userDB._id,
            name: userDB.name,
            lastName: userDB.lastName,
            email: userDB.email,
            status: userDB.status,
            role: userDB.role,
            //...
        };

        res.json({
            ok: true,
            token,
            user: userResponse
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected Error'
        });
    }
}

const sendResetEmail = async (email, token) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Pon tus credenciales en variables de entorno
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset',
        text: `You requested a password reset. Please click on the following link, or paste it into your browser to complete the process:
              http://yourfrontendurl.com/reset/${token}
              If you did not request this, please ignore this email and your password will remain unchanged.`
    };

    return transporter.sendMail(mailOptions); // Esta función devuelve una promesa
};

const requestPasswordReset = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: 'User not found'
            });
        }

        const resetToken = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = Date.now() + 3600000; // token expires in 1 hour

        await user.save();

        // Send email logic
        await sendResetEmail(email, resetToken);

        res.json({
            ok: true,
            msg: 'Check your email for password reset link'
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
};


module.exports = {
    signIn,
    renewToken,
    requestPasswordReset
}