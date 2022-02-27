const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cliente = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  constraseña: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  fechaNacimiento: {
    type: String, //YYYY-MM-DD
    required: true,
  },
  sexo: {
    type: String,
    enum: ["M", "F"],
    required: true,
  },
  status: {
    type: String,
    enum: ["A", "I"],
    required: true,
    default: "A",
  },
  documento: {
    tipo: {
      type: String,
      enum: ["individual", "corporation"],
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
  },
  direccion: {
    ciudad: String,
    departamento: String,
    codigoPostal: String,
    numero: String,
    pais: String,
  },
  dataArchivo: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cliente", cliente);
