const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const colaborador = new Schema({
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
  cuentaBancaria: {
    titular: {
      type: String,
      required: true,
    },
    cedula: {
      type: String,
      required: true,
    },
    banco: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    agencia: {
      type: String,
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
    dv: {
      type: String,
      required: true,
    },
  },
  recipientId: {
    type: String,
    required: true,
  },
  dataArchivo: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Colaborador", colaborador);
