const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sala = new Schema({   

    nombre: {
        type: String,
        required: [true, 'Nombre es obligatorio']
    },
    foto: String,
    capa: String,
    email: {
        type: String,
        required: [true, 'Email es obligatorio']
    },
    contraseña: {
        type: String,
        default: null
    },
    telefono: String,
    direccion : {
        ciudad: String,
        departamento: String,
        codigoPostal: String,
        numero: String,
        pais: String
    },
    geo:{
        type: String,
        coordenadas: Array
    },
    dataArchivo: {
        type: Date,
        default: Date.now
    }

});

sala.index({ geo: '2dsphere'});

module.exports = mongoose.model('Sala', sala)