const { Router } = require('express');

const { check } = require('express-validator');
// Middleware
const { validateFields } = require('../middleware/validateFields');
const { validateAdminRole } = require('../middleware/validateRole');

const {
    getAllAthletes,
    getAthlete,
    searchAthlete,
    createAthlete,
    updateAthlete,
    deleteAthlete
} = require('../controllers/athletes.controller');


const router = Router();

// Ruta para obtener todos los atletas
router.get('/', validateAdminRole, getAllAthletes);

// Ruta para obtener un atleta específico
router.get('/:id', getAthlete);

//====================================================
//todo: todos los athletas de un mismo usuario
//====================================================

// Ruta para buscar atletas
router.get('/search', validateAdminRole, searchAthlete);

// Ruta para crear un nuevo atleta
router.post(
    '/',
    [ // Middlewares de validación
        check('email', 'Email is required').isEmail(),
        check('name', 'Name is required').notEmpty(),
        // ... otros checks para otros campos, según necesites
        validateFields
    ],
    createAthlete
);

// Ruta para actualizar un atleta
router.put(
    '/:id',
    [ // Middlewares de validación
        check('email', 'Email is required').isEmail(),
        check('name', 'Name is required').notEmpty(),
        // ... otros checks para otros campos, según necesites
        validateFields
    ],
    updateAthlete
);

// Ruta para eliminar un atleta
router.delete('/:id', deleteAthlete);

module.exports = router;
