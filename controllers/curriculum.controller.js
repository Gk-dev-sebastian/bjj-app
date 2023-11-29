const { response } = require('express');

const FlowC = require('../models/curriculum');


const createFlowC = async (req, res) => {
    try {
        const flowC = new FlowC({
            ...req.body,
            date: new Date()
        });

        await flowC.save();

        res.status(201).json({
            ok: true,
            flowC
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

const getAllFlowC = async (req, res) => {

    try {

        const flowC = await FlowC.find();

        res.status(200).json({
            ok: true,
            flowC
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

const getFlowCById = async (req, res) => {
    const flowCId = req.params.id;

    try {
        const flowC = await FlowC.findById(flowCId);

        if (!flowC) {
            return res.status(404).json({
                ok: false,
                msg: 'flowC not found'
            });
        }

        res.status(200).json({
            ok: true,
            flowC
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

const updateFlowC = async (req, res) => {

    const flowCId = req.params.id;

    try {

        const flowC = await FlowC.findById(flowCId);

        if (!flowC) {
            return res.status(404).json({
                ok: false,
                msg: 'Program not found'
            });
        }

        const updatedFlowC = await FlowC.findByIdAndUpdate(flowCId, req.body, { new: true });

        res.status(200).json({
            ok: true,
            flowC: updatedFlowC
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

const deleteFlowC = async (req, res) => {

    const flowCId = req.params.id;

    try {

        const flowC = await FlowC.findById(flowCId);

        if (!flowC) {
            return res.status(404).json({
                ok: false,
                msg: 'Program not found'
            });
        }

        await FlowC.findByIdAndDelete(flowCId);

        res.status(200).json({
            ok: true,
            msg: 'flowC deleted'
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
   createFlowC,
   getAllFlowC,
   getFlowCById,
   updateFlowC,
   deleteFlowC
}
