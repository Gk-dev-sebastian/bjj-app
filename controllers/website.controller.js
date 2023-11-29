const Website = require('../models/website');

const websiteController = {

    // Función para obtener los datos del sitio web
    getWebsiteData: async (req, res) => {
        try {
            const websiteData = await Website.findOne();
            if (!websiteData) {
                return res.status(404).json({ message: "Datos no encontrados" });
            }
            res.json(websiteData);
        } catch (error) {
            res.status(500).json({ message: "Error del servidor", error });
        }
    },

    // Función para crear datos iniciales del sitio web
    createWebsiteData: async (req, res) => {
        try {
            const websiteData = new Website(req.body);
            await websiteData.save();
            res.status(201).json({ message: "Datos creados exitosamente", websiteData });
        } catch (error) {
            res.status(500).json({ message: "Error del servidor", error });
        }
    },

    // Función para actualizar los datos del sitio web
    updateWebsiteData: async (req, res) => {
        try {
            const { id } = req.params;
            const websiteData = await Website.findByIdAndUpdate(id, req.body, { new: true });
            if (!websiteData) {
                return res.status(404).json({ message: "Datos no encontrados para actualizar" });
            }
            res.json({ message: "Datos actualizados exitosamente", websiteData });
        } catch (error) {
            res.status(500).json({ message: "Error del servidor", error });
        }
    }
};

module.exports = websiteController;
