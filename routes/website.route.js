const express = require('express');
const websiteController = require('../controllers/website.controller');
const { validateAdminRole } = require('../middleware/validateRole');

const router = express.Router();

// Ruta para obtener los datos del sitio web
router.get('/',  validateAdminRole, websiteController.getWebsiteData);

// Ruta para crear datos iniciales del sitio web
router.post('/',  validateAdminRole, websiteController.createWebsiteData);

// Ruta para actualizar los datos del sitio web
router.put('/:id',  validateAdminRole, websiteController.updateWebsiteData);

module.exports = router;
