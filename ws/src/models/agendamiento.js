const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const agendamiento = new Schema({
  salaId: {
    type: mongoose.Types.ObjectId,
    ref: "Sala",
    required: true,
  },
  clienteId: {
    type: mongoose.Types.ObjectId,
    ref: "Cliente",
    required: true,
  },

  servicioId: {
    type: mongoose.Types.ObjectId,
    ref: "Servicio",
    required: true,
  },

  colaboradorId: {
    type: mongoose.Types.ObjectId,
    ref: "Colaborador",
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
  comision: {
    type: Number,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  transaccionId: {
    type: String,
    required: true,
  },
  dataArchivo: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Agendamiento", agendamiento);
