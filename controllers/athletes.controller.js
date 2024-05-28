const { response } = require('express');
const Athlete = require('../models/athlete');
const User = require('../models/user');


const createAthlete = async (req, res = response) => {
    try {
        const athlete = new Athlete(req.body);
        await athlete.save();
        res.status(201).json({
            ok: true,
            athlete
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

const getAthlete = async (req, res = response) => {
    const athleteId = req.params.id;
    try {
        const athlete = await Athlete.findById(athleteId); 
        res.status(200).json({
            ok: true,
            athlete
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

const getAllAthletes = async (req, res = response) => {
    

    try {
       
        const athletes = await Athlete.find();
        return res.status(200).json({
            ok: true,
            athletes
        });
       
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

const searchAthlete = async (req, res) => {
    const searchTerm = req.query.term;

    try {
        // Utilizamos una expresión regular para hacer una búsqueda insensible a mayúsculas/minúsculas
        const regex = new RegExp(searchTerm, 'i');

        const athletes = await Athlete.find({
            $or: [
                { name: regex },
                { lastName: regex }
            ]
        });

        res.json({
            ok: true,
            athletes
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

const updateAthlete = async (req, res = response) => {
    const athleteId = req.params.id;
    try {
        const athlete = await Athlete.findByIdAndUpdate(athleteId, req.body, { new: true }); 
        res.status(200).json({
            ok: true,
            athlete
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

const deleteAthlete = async (req, res = response) => {
    const athleteId = req.params.id;
    try {
        await Athlete.findByIdAndRemove(athleteId);
        res.status(200).json({
            ok: true,
            msg: 'Athlete deleted successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

module.exports = {
    createAthlete,
    getAthlete,
    updateAthlete,
    deleteAthlete,
    getAllAthletes,
    searchAthlete
}
