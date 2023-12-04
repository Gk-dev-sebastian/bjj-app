const Schedule = require('../models/schedule');
const Class = require('../models/class');

exports.getWeekSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findOne() // Cambiado a findOne
            .sort({ weekStarting: -1 }) // Ordenar por fecha de inicio de semana en orden descendente
            .populate({
                path: 'days.classes.class',
                model: Class,
                populate: {
                    path: 'program',
                    model: 'Program',
                    select: 'programName description'
                }
            });

        if (!schedule) {
            return res.status(404).json({ error: 'No schedule found' });
        }

        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Añadir una nueva clase a un día específico del horario
exports.addClassToSchedule = async (req, res) => {
    const { classId, date } = req.body;

    try {
        const schedule = await Schedule.findOne({ weekStarting: { $lte: date } }).sort({ weekStarting: -1 });
        const classData = await Class.findById(classId);

        if (!schedule || !classData) {
            return res.status(404).json({ error: 'Schedule or class not found' });
        }

        // Convierte la fecha a formato 'YYYY-MM-DD' antes de comparar
        const formattedDate = new Date(date).toISOString().split('T')[0];

        // Encuentra el día específico en el horario
        const dayToUpdate = schedule.days.find(day => day.day.toISOString().split('T')[0] === formattedDate);

        if (!dayToUpdate) {
            return res.status(404).json({ error: 'Day not found in schedule' });
        }

        // Verifica si la clase ya ha sido agregada a este día
        const isClassAlreadyAdded = dayToUpdate.classes.some(c => c.class.toString() === classId);
        if (isClassAlreadyAdded) {
            return res.status(400).json({ error: 'Class already added to this day' });
        }

        // Agrega la clase al día
        dayToUpdate.classes.push({ class: classId });

        await schedule.save();
        res.status(200).json({ message: 'Class added to schedule successfully', updatedSchedule: schedule });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



exports.createScheduleForWeek = async (req, res) => {
    try {
        const { weekStarting } = req.body;

        const existingSchedule = await Schedule.findOne({ weekStarting });
        if (existingSchedule) {
            return res.status(400).json({ error: 'A schedule for this week already exists' });
        }

        const newSchedule = new Schedule({
            weekStarting
        });

        await newSchedule.save();
        res.status(201).json(newSchedule);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo día en el horario
exports.createDayInSchedule = async (req, res) => {
    const { weekStarting, day, dayName, workingDay } = req.body;

    try {
        const schedule = await Schedule.findOne({ weekStarting: weekStarting });

        if (!schedule) {
            return res.status(404).json({ error: 'No schedule found for the given week' });
        }

        schedule.days.push({
            day: day,
            dayName: dayName,
            workingDay: workingDay,
            classes: []
        });

        await schedule.save();

        res.status(200).json({ message: 'Day added successfully', updatedSchedule: schedule });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un día específico en el horario
exports.updateDayInSchedule = async (req, res) => {
    const { weekStarting, day, dayName, workingDay } = req.body;

    try {
        const schedule = await Schedule.findOne({ weekStarting: weekStarting });

        if (!schedule) {
            return res.status(404).json({ error: 'No schedule found for the given week' });
        }

        const dayToUpdate = schedule.days.find(d => d.day.toISOString() === day);

        if (dayName) dayToUpdate.dayName = dayName;
        if (workingDay) dayToUpdate.workingDay = workingDay;

        await schedule.save();

        res.status(200).json({ message: 'Day updated successfully', updatedSchedule: schedule });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un día específico del horario
exports.deleteDayInSchedule = async (req, res) => {
    const { weekStarting, day } = req.body;

    try {
        const schedule = await Schedule.findOne({ weekStarting: weekStarting });

        if (!schedule) {
            return res.status(404).json({ error: 'No schedule found for the given week' });
        }

        const index = schedule.days.findIndex(d => d.day.toISOString() === day);
        if (index === -1) {
            return res.status(404).json({ error: 'Day not found in the schedule' });
        }

        schedule.days.splice(index, 1);
        await schedule.save();

        res.status(200).json({ message: 'Day deleted successfully', updatedSchedule: schedule });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

