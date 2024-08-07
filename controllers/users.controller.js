

const { response } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');
const Document = require('../models/document');



    const getUsers = async(req, res) => {
        try {
            const users = await User.find().populate('todo');
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching users', error });
        }
    }

    // Obtener un usuario por ID
    const getUserById = async(req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.findById(userId).populate('todo');

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
                                    .populate('todo');

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
                                    .populate('todo');

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
                                   .populate('todo');

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

        const { pass, email } = req.body;
    
        console.log( req.body);
    
        try {
    
            const emailExists= await User.findOne({ email });
    
            if( emailExists ) {
    
                return res.status(400).json({
                    ok: false,
                    msg: 'This email already exists, try again'
                });
    
            }
    
            const user = new User( req.body );
    
            // encrypt pass
            const salt = bcryptjs.genSaltSync();
            user.pass = bcryptjs.hashSync( pass, salt );
    
            // save user
            await user.save();
    
            // generate token
            //const token = await generateJTW( user._id, user.name, user.email );
    
            res.json({
        
                ok: true,
                user,
                //token
                
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
    deleteUser
}
