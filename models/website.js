const mongoose = require('mongoose');
const { Schema } = mongoose;

const TextSchema = new Schema({
    textTitle: String,
    textParagraph: [String]
}, { _id: false });

const SectionSchema = new Schema({
    section: String,
    text: [TextSchema],
    backImg: String
}, { _id: false });

const imageSchema = new Schema({
    src: String,     // ruta de la imagen
    altText: String,
    title: String
});

const multimediaSchema = new Schema({
    type: {         // "video", "audio", "image", etc.
        type: String,
        enum: ['video', 'audio', 'image', 'gallery'],
        required: true
    },
    src: String,     // ruta o URL
    title: String,
    description: String
});

const socialMediaSchema = new Schema({
    platform: String, // "Facebook", "Twitter", etc.
    username: String,
    link: String      // URL completa
});

const seoConfigSchema = new Schema({
    metaDescription: String,
    keywords: [String]
});

const websiteSchema = new Schema({
    // Contenido General
    titles: [String],
    subtitles: [String],
    texts: [SectionSchema],
    images: [imageSchema],
    multimedia: [multimediaSchema],

    // Configuración General del Sitio
    logo: imageSchema,
    favicon: imageSchema,
    footer: String,
    copyright: String,
    contact: {
        address: String,
        phone: String,
        email: String
    },
    socialMedia: [socialMediaSchema],
    seoConfig: seoConfigSchema,
    design: {
        colors: {
            primary: String,
            secondary: String,
            tertiary: String,
            //... otros colores que desees definir
        },
        typography: {
            primaryFont: String,
            secondaryFont: String,
            //... otros tipos de letra o estilos que desees definir
        }
    }
});

module.exports = mongoose.model('Website', websiteSchema);
