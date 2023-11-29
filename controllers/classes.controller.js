const Class = require('../models/class');

exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find()
            .populate('program', 'programName description')
            .populate('athletes', '_id name lastName age rank');
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getClassesByDate = async (req, res) => {
    const date = new Date(req.params.date);
    try {
        const classes = await Class.find({ date: { $gte: date, $lt: new Date(date.getTime() + 24 * 60 * 60 * 1000) } })
            .populate('program', 'programName description')
            .populate('athletes', '_id name lastName age rank');
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getClassById = async (req, res) => {
    try {
        const classData = await Class.findById(req.params.id)
            .populate('program', 'programName description')
            .populate('athletes', '_id name lastName age rank');
        if (!classData) {
            return res.status(404).json({ error: 'Class not found' });
        }
        res.status(200).json(classData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createClass = async (req, res) => {
    try {
        const newClass = new Class(req.body);
        await newClass.save();
        res.status(201).json(newClass);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateClass = async (req, res) => {
    try {
        const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedClass);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteClass = async (req, res) => {
    try {
        await Class.findByIdAndRemove(req.params.id);
        res.status(200).json({ message: 'Class deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateWeek = async (req, res) => {
    try {
        const updatedClasses = await Class.updateMany({}, {
            $inc: { date: 7 * 24 * 60 * 60 * 1000 }, // Incrementa la fecha en 7 días
            $set: {
                booked: 0,
                status: 'open',
                athletes: [],
                videos: []
            }
        });
        res.status(200).json(updatedClasses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
