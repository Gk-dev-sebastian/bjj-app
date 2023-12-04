const express = require('express');
const router = express.Router();

const scheduleController = require('../controllers/schedule.controller');

//const { validateAdminRole } = require('../middleware/validateRole'); 

// Obtener el horario de una semana específica
router.get('/week', scheduleController.getWeekSchedule);

// Añadir una nueva clase a un día específico del horario
router.post('/add-class', scheduleController.addClassToSchedule);

//
router.post('/create-week', scheduleController.createScheduleForWeek);

// Crear un nuevo día en el horario
router.post('/create-day', scheduleController.createDayInSchedule);

// Actualizar un día específico en el horario
router.put('/update-day', scheduleController.updateDayInSchedule);

// Eliminar un día específico del horario
router.delete('/delete-day', scheduleController.deleteDayInSchedule);


module.exports = router;
