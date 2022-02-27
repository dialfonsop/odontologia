const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const horario = new Schema({
  salaId: {
    type: mongoose.Types.ObjectId,
    ref: "Sala",
    required: true,
  },
  especialidades: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Servicio",
      required: true,
    },
  ],
  colaboradores: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Colaborador",
      required: true,
    },
  ],
  dias: {
    type: [Number],
    required: true,
  },
  inicio: {
    type: Date,
    required: true,
  },
  fin: {
    type: Date,
    required: true,
  },
  dataArchivo: {
    type: Date,
    default: Date.now,
  },
});

sala.index({ geo: "2dsphere" });

module.exports = mongoose.model("Horario", horario);
