const { response } = require('express');

const Program = require('../models/program');


const createProgram = async (req, res) => {
    try {
        const program = new Program({
            ...req.body,
            date: new Date()
        });

        await program.save();

        res.status(201).json({
            ok: true,
            program
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

const getAllPrograms = async (req, res) => {

    try {

        const programs = await Program.find();

        res.status(200).json({
            ok: true,
            programs
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

const getProgramById = async (req, res) => {
    const programId = req.params.id;

    try {
        const program = await Program.findById(programId);

        if (!program) {
            return res.status(404).json({
                ok: false,
                msg: 'Program not found'
            });
        }

        res.status(200).json({
            ok: true,
            program
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

const updateProgram = async (req, res) => {

    const programId = req.params.id;

    try {

        const program = await Program.findById(programId);

        if (!program) {
            return res.status(404).json({
                ok: false,
                msg: 'Program not found'
            });
        }

        const updatedProgram = await Program.findByIdAndUpdate(programId, req.body, { new: true });

        res.status(200).json({
            ok: true,
            program: updatedProgram
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

const deleteProgram = async (req, res) => {

    const programId = req.params.id;

    try {

        const program = await Program.findById(programId);

        if (!program) {
            return res.status(404).json({
                ok: false,
                msg: 'Program not found'
            });
        }

        await Program.findByIdAndDelete(programId);

        res.status(200).json({
            ok: true,
            msg: 'Program deleted'
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
   createProgram,
   getAllPrograms,
   updateProgram,
   deleteProgram,
   getProgramById
}
