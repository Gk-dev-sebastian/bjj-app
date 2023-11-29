const express = require('express');
const router = express.Router();

const classController = require('../controllers/classes.controller');

const { validateAdminRole } = require('../middleware/validateRole'); 

// Obtener todas las clases
router.get('/', classController.getAllClasses);

// Obtener clases según una fecha específica
router.get('/date/:date', classController.getClassesByDate);

// Obtener una clase específica por ID
router.get('/:id', classController.getClassById);

// Crear una nueva clase
router.post('/', validateAdminRole, classController.createClass);

// Actualizar todas las clases para la siguiente semana
router.put('/update-week', validateAdminRole, classController.updateWeek);

// Actualizar una clase específica
router.put('/:id', classController.updateClass);

// Eliminar una clase específica
router.delete('/:id', validateAdminRole, classController.deleteClass);


module.exports = router;
