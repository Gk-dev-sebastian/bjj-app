

const { response } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');
const Athletes = require('../models/athlete');



    const getUsers = async(req, res) => {
        try {
            const users = await User.find().populate('athletes');
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching users', error });
        }
    }

    // Obtener un usuario por ID
    const getUserById = async(req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.findById(userId)
                                   .populate('athletes');

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json(user);

        } catch (error) {
            res.status(500).json({ message: 'Error fetching user', error });
        }
    }

    // Obtener usuarios según status y role
    const getUsersByStatusAndRole = async(req, res) => { 
        try {
            const { status, role } = req.query;

            if (!status || !role) {
                return res.status(400).json({ message: 'Both status and role are required as query parameters.' });
            }

            const users = await User.find({ status: status, role: role })
                                    .populate('athletes');

            res.status(200).json(users);

        } catch (error) {
            res.status(500).json({ message: 'Error fetching users', error });
        }
    }

    // Buscar usuario (por ejemplo, por email)
    const searchUser = async(req, res) => {
        try {
            const searchTerm = new RegExp(req.query.term, 'i');  // Buscar insensitivo a mayúsculas/minúsculas.
            const users = await User.find({ email: searchTerm })
                                    .populate('athletes');

            res.status(200).json(users);

        } catch (error) {
            res.status(500).json({ message: 'Error searching users', error });
        }
    }

    // Actualizar un usuario
    const updateUser = async(req, res) => {
        try {
            const userId = req.params.id;
            const updatedData = req.body;
            const user = await User.findByIdAndUpdate(userId, updatedData, { new: true })
                                   .populate('athletes');

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User updated successfully', user });

        } catch (error) {
            res.status(500).json({ message: 'Error updating user', error });
        }
    }

    // Eliminar un usuario
    const deleteUser = async(req, res) => {
        try {
            const userId = req.params.id;
            await User.findByIdAndDelete(userId);

            res.status(200).json({ message: 'User deleted successfully' });

        } catch (error) {
            res.status(500).json({ message: 'Error deleting user', error });
        }
    }

    //=====================================================

    const createUsers = async( req, res = response ) => {
        const { email, ...rest } = req.body;
    
        try {
            const emailExists= await User.findOne({ email });
    
            if( emailExists ) {
                return res.status(400).json({
                    ok: false,
                    msg: 'This email already exists'
                });
            }
    
            const user = new User({ ...rest, email, role: 'TRIAL-VISITOR', status: 'pending' });
    
            // save user
            await user.save();
    
            res.status(201).json({
                ok: true,
                user
            });
    
        } catch (error) {
            console.log( error );
            res.status(500).json({
                ok: false,
                msg: 'Unexpected error'
            });
        }
    }

    //=====================================================

    const completeRegistration = async( req, res = response ) => {
        const { email, pass, paymentDetails } = req.body;
    
        try {
            const user = await User.findOne({ email });
    
            if( !user ) {
                return res.status(404).json({
                    ok: false,
                    msg: 'User not found'
                });
            }
    
            // Encrypt pass
            const salt = bcryptjs.genSaltSync();
            const hashedPass = bcryptjs.hashSync( pass, salt );
    
            user.pass = hashedPass;
    
            // TODO: Process paymentDetails with your payment solution.
            // This could be sending data to Stripe, PayPal, etc.
            // After successful payment, adjust the user's status and role accordingly.
            
            user.role = 'MEMBER';
            user.status = 'active';
    
            await user.save();
    
            res.status(200).json({
                ok: true,
                msg: 'Registration completed successfully'
            });
    
        } catch (error) {
            console.log( error );
            res.status(500).json({
                ok: false,
                msg: 'Unexpected error'
            });
        }
    }
    
    



module.exports = {
    getUsers,
    getUserById,
    getUsersByStatusAndRole,
    searchUser,
    createUsers,
    updateUser,
    deleteUser,
    completeRegistration
}
